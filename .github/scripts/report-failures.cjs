// Opens, updates and closes GitHub issues for failed docs workflow runs. Invoked from the `report-failures` job in
// .github/workflows/gh-pages.yaml via actions/github-script:
//   require('./.github/scripts/report-failures.cjs')({ github, context, core, inputs })
// inputs: { needs: <toJSON(needs)>, reportDir?: directory the apidocs-report artifact was downloaded to }.
// Two independent tracks, each with its own label and open issue.
const fs = require('node:fs');

const TRACKS = [
  {
    id: 'build',
    label: 'docs-build-failure',
    color: 'b60205',
    description: 'The docs build or deploy failed',
    title: 'Docs build failed',
    jobs: ['build', 'deploy'],
  },
  {
    id: 'guides',
    label: 'guide-examples-failure',
    color: 'd93f0b',
    description: 'Guide examples failed validation against the built schema',
    title: 'Guide examples failed validation',
    jobs: ['validate-guides'],
  },
];

const MAX_BLOCKING = 20;

// 'failed' | 'resolved' | 'none' for the needs.<job>.result values that feed a track.
function trackState(track, needs) {
  const results = track.jobs.map((job) => needs?.[job]?.result);
  if (results.includes('failure')) return 'failed';
  // Skipped or cancelled jobs neither report nor resolve anything.
  return results.every((result) => result === 'success') ? 'resolved' : 'none';
}

const issueTitle = (track, date) => `${track.title} (${date})`;

const runUrlFor = ({ serverUrl, repository, runId }) => `${serverUrl}/${repository}/actions/runs/${runId}`;

// Short markdown summary of .schema/report.json: blocking unassigned names and conflict counts.
function summarizeReport(report) {
  if (!report || typeof report !== 'object') return '';
  const nameOf = (item) => (typeof item === 'string' ? item : item?.name);
  const blocking = (report.blocking ?? []).map(nameOf).filter(Boolean);
  const lines = ['### Classification report', ''];
  if (blocking.length) {
    lines.push(`Blocking unassigned names (${blocking.length}):`);
    lines.push(...blocking.slice(0, MAX_BLOCKING).map((name) => `- \`${name}\``));
    if (blocking.length > MAX_BLOCKING) lines.push(`- ... and ${blocking.length - MAX_BLOCKING} more`);
  } else {
    lines.push('Blocking unassigned names: none');
  }
  lines.push(
    '',
    `- cdmConflicts: ${(report.cdmConflicts ?? []).length}`,
    `- overrideConflicts: ${(report.overrideConflicts ?? []).length}`,
    `- staleCdm: ${(report.staleCdm ?? []).length}`,
  );
  return lines.join('\n');
}

// Body of a new issue or of a follow-up comment on an open one.
function buildBody({ track, runUrl, event, sha, failedJobs = [], summary = '' }) {
  const lines = [
    `${track.title} in [this run](${runUrl}).`,
    '',
    `- Run: ${runUrl}`,
    `- Event: ${event}`,
    `- Commit: ${sha}`,
  ];
  if (failedJobs.length) lines.push(`- Failed: ${failedJobs.join(', ')}`);
  if (summary) lines.push('', summary);
  return lines.join('\n');
}

const resolvedComment = (runUrl) => `Resolved by ${runUrl}`;

// reportDir: where the apidocs-report artifact was downloaded (report.json sits under .schema/ there).
function readReport(reportDir) {
  if (!reportDir) return null;
  for (const path of [`${reportDir}/.schema/report.json`, `${reportDir}/report.json`]) {
    try {
      if (fs.statSync(path).isFile()) return JSON.parse(fs.readFileSync(path, 'utf8'));
    } catch {
      // try the next candidate
    }
  }
  return null;
}

async function ensureLabel({ github, context, track }) {
  try {
    await github.rest.issues.createLabel({
      ...context.repo, name: track.label, color: track.color, description: track.description,
    });
  } catch (error) {
    if (error.status !== 422) throw error; // 422: already exists
  }
}

async function failedJobNames({ github, context, track, core }) {
  try {
    const { data } = await github.rest.actions.listJobsForWorkflowRun({
      ...context.repo, run_id: context.runId, per_page: 100,
    });
    return data.jobs.filter((job) => job.conclusion === 'failure' && track.jobs.includes(job.name)).map((job) => job.name);
  } catch (error) {
    core.info(`could not list jobs: ${error.message}`);
    return [];
  }
}

async function findOpenIssue({ github, context, track }) {
  const { data } = await github.rest.issues.listForRepo({
    ...context.repo, state: 'open', labels: track.label, per_page: 100,
  });
  return data.find((issue) => !issue.pull_request) ?? null;
}

module.exports = async function reportFailures({ github, context, core, inputs }) {
  const needs = inputs.needs ?? {};
  const runUrl = runUrlFor({
    serverUrl: context.serverUrl, repository: `${context.repo.owner}/${context.repo.repo}`, runId: context.runId,
  });
  const date = new Date().toISOString().slice(0, 10);

  for (const track of TRACKS) {
    const state = trackState(track, needs);
    if (state === 'none') continue;
    await ensureLabel({ github, context, track });
    const open = await findOpenIssue({ github, context, track });

    if (state === 'resolved') {
      if (!open) continue;
      await github.rest.issues.createComment({ ...context.repo, issue_number: open.number, body: resolvedComment(runUrl) });
      await github.rest.issues.update({ ...context.repo, issue_number: open.number, state: 'closed', state_reason: 'completed' });
      core.info(`${track.label}: closed #${open.number}`);
      continue;
    }

    const report = track.id === 'build' ? readReport(inputs.reportDir) : null;
    const body = buildBody({
      track,
      runUrl,
      event: context.eventName,
      sha: context.sha,
      failedJobs: await failedJobNames({ github, context, track, core }),
      summary: summarizeReport(report),
    });
    if (open) {
      await github.rest.issues.createComment({ ...context.repo, issue_number: open.number, body });
      core.info(`${track.label}: commented on #${open.number}`);
    } else {
      const { data } = await github.rest.issues.create({
        ...context.repo, title: issueTitle(track, date), body, labels: [track.label],
      });
      core.info(`${track.label}: opened #${data.number}`);
    }
  }
};

Object.assign(module.exports, {
  TRACKS, MAX_BLOCKING, trackState, issueTitle, runUrlFor, summarizeReport, buildBody, resolvedComment, readReport,
});
