import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const reportFailures = require('../.github/scripts/report-failures.cjs');
const { TRACKS, trackState, issueTitle, runUrlFor, summarizeReport, buildBody, resolvedComment } = reportFailures;
const [build, guides] = TRACKS;

test('tracks use the agreed labels and titles', () => {
  assert.equal(build.label, 'docs-build-failure');
  assert.equal(guides.label, 'guide-examples-failure');
  assert.equal(issueTitle(build, '2026-09-30'), 'Docs build failed (2026-09-30)');
  assert.equal(issueTitle(guides, '2026-09-30'), 'Guide examples failed validation (2026-09-30)');
});

test('trackState: build track fails on build or deploy failure', () => {
  const needs = (b, d, g = 'success') => ({ build: { result: b }, deploy: { result: d }, 'validate-guides': { result: g } });
  assert.equal(trackState(build, needs('failure', 'skipped')), 'failed');
  assert.equal(trackState(build, needs('success', 'failure')), 'failed');
  assert.equal(trackState(build, needs('success', 'success')), 'resolved');
  assert.equal(trackState(build, needs('cancelled', 'skipped')), 'none');
  assert.equal(trackState(build, needs('success', 'cancelled')), 'none');
});

test('trackState: guides track depends only on validate-guides', () => {
  const needs = (g) => ({ build: { result: 'failure' }, deploy: { result: 'failure' }, 'validate-guides': { result: g } });
  assert.equal(trackState(guides, needs('failure')), 'failed');
  assert.equal(trackState(guides, needs('success')), 'resolved');
  assert.equal(trackState(guides, needs('skipped')), 'none');
  assert.equal(trackState(guides, needs('cancelled')), 'none');
  assert.equal(trackState(guides, {}), 'none');
});

test('runUrlFor builds the Actions run URL', () => {
  assert.equal(
    runUrlFor({ serverUrl: 'https://github.com', repository: 'o/r', runId: 42 }),
    'https://github.com/o/r/actions/runs/42',
  );
});

test('summarizeReport lists up to 20 blocking names and counts', () => {
  const blocking = Array.from({ length: 23 }, (_, i) => ({ kind: 'type', name: `T${i}` }));
  const md = summarizeReport({ blocking, cdmConflicts: [1, 2], overrideConflicts: [], staleCdm: [1, 2, 3] });
  assert.match(md, /Blocking unassigned names \(23\)/);
  assert.match(md, /- `T19`/);
  assert.doesNotMatch(md, /`T20`/);
  assert.match(md, /and 3 more/);
  assert.match(md, /cdmConflicts: 2/);
  assert.match(md, /overrideConflicts: 0/);
  assert.match(md, /staleCdm: 3/);
});

test('summarizeReport handles none and missing reports', () => {
  assert.match(summarizeReport({ blocking: [] }), /Blocking unassigned names: none/);
  assert.equal(summarizeReport(null), '');
});

test('buildBody includes run URL, event, commit, failed jobs and summary', () => {
  const body = buildBody({
    track: build, runUrl: 'https://x/run/1', event: 'schedule', sha: 'abc123', failedJobs: ['build'], summary: 'SUMMARY',
  });
  assert.match(body, /Docs build failed/);
  assert.match(body, /Run: https:\/\/x\/run\/1/);
  assert.match(body, /Event: schedule/);
  assert.match(body, /Commit: abc123/);
  assert.match(body, /Failed: build/);
  assert.match(body, /SUMMARY$/);
  assert.doesNotMatch(buildBody({ track: guides, runUrl: 'u', event: 'push', sha: 's' }), /Failed:/);
  assert.equal(resolvedComment('https://x/run/2'), 'Resolved by https://x/run/2');
});

function fakeGithub({ open = {} } = {}) {
  const calls = [];
  const rec = (name, result = {}) => async (args) => { calls.push([name, args]); return result; };
  return {
    calls,
    rest: {
      issues: {
        createLabel: async (args) => { calls.push(['createLabel', args]); throw Object.assign(new Error('exists'), { status: 422 }); },
        listForRepo: async (args) => { calls.push(['listForRepo', args]); return { data: open[args.labels] ? [{ number: open[args.labels] }] : [] }; },
        create: rec('create', { data: { number: 7 } }),
        createComment: rec('createComment'),
        update: rec('update'),
      },
      actions: { listJobsForWorkflowRun: async () => ({ data: { jobs: [{ name: 'build', conclusion: 'failure' }] } }) },
    },
  };
}
const context = { repo: { owner: 'o', repo: 'r' }, serverUrl: 'https://github.com', runId: 9, eventName: 'schedule', sha: 'deadbeef' };
const core = { info() {} };
const ok = (r) => ({ result: r });

test('opens an issue for a failing track and ignores existing labels', async () => {
  const github = fakeGithub();
  await reportFailures({ github, context, core, inputs: { needs: { build: ok('failure'), deploy: ok('skipped'), 'validate-guides': ok('success') } } });
  const created = github.calls.filter(([n]) => n === 'create');
  assert.equal(created.length, 1);
  assert.equal(created[0][1].labels[0], 'docs-build-failure');
  assert.match(created[0][1].title, /^Docs build failed \(\d{4}-\d{2}-\d{2}\)$/);
  assert.match(created[0][1].body, /actions\/runs\/9/);
  assert.match(created[0][1].body, /Failed: build/);
});

test('comments on an open issue and closes it when the track recovers', async () => {
  const github = fakeGithub({ open: { 'docs-build-failure': 3, 'guide-examples-failure': 4 } });
  await reportFailures({ github, context, core, inputs: { needs: { build: ok('failure'), deploy: ok('skipped'), 'validate-guides': ok('success') } } });
  const comments = github.calls.filter(([n]) => n === 'createComment');
  assert.deepEqual(comments.map(([, a]) => a.issue_number).sort(), [3, 4]);
  assert.match(comments.find(([, a]) => a.issue_number === 4)[1].body, /^Resolved by https:\/\/github\.com\/o\/r\/actions\/runs\/9$/);
  const closed = github.calls.filter(([n]) => n === 'update');
  assert.equal(closed.length, 1);
  assert.equal(closed[0][1].issue_number, 4);
  assert.equal(closed[0][1].state, 'closed');
  assert.equal(github.calls.filter(([n]) => n === 'create').length, 0);
});

test('skipped and cancelled results do nothing', async () => {
  const github = fakeGithub({ open: { 'docs-build-failure': 3 } });
  await reportFailures({ github, context, core, inputs: { needs: { build: ok('cancelled'), deploy: ok('skipped'), 'validate-guides': ok('skipped') } } });
  assert.deepEqual(github.calls, []);
});
