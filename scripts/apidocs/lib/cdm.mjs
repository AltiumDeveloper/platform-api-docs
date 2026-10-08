import { parse } from 'yaml';

export const CDM_SITE = 'https://altiumdeveloper.github.io/cdm';
export const DEFAULT_CDM_REF = 'main';
export const CDM_REPO = 'AltiumDeveloper/cdm';
export const CDM_SCHEMA_DIR = 'src/common_data_model/schema';

export const cdmCommitUrl = (sha, repo = CDM_REPO) => `https://github.com/${repo}/commit/${sha}`;
export const cdmResolveUrl = (ref, repo = CDM_REPO) =>
  `https://api.github.com/repos/${repo}/commits/${encodeURIComponent(ref)}`;
export const cdmListUrl = (sha, repo = CDM_REPO, dir = CDM_SCHEMA_DIR) =>
  `https://api.github.com/repos/${repo}/contents/${dir}?ref=${sha}`;
export const cdmRawUrl = (sha, name, repo = CDM_REPO, dir = CDM_SCHEMA_DIR) =>
  `https://raw.githubusercontent.com/${repo}/${sha}/${dir}/${name}`;

// Shape of .schema/cdm-meta.json: the requested ref, the commit it resolved to, and where/when it was fetched.
export const buildCdmMeta = ({ ref, sha = null, fetchedAt = null, source }) => ({ ref, sha, fetchedAt, source });

const annotationValue = (annotation) =>
  annotation && typeof annotation === 'object' ? annotation.value ?? null : annotation ?? null;

export function cdmClassPageName(key, cls) {
  const uri = cls?.class_uri;
  if (typeof uri === 'string' && /^[A-Za-z][\w-]*:[A-Za-z_]\w*$/.test(uri)) {
    const [prefix, local] = uri.split(':');
    return `${prefix}_${local}`;
  }
  return key;
}

// The class IRI: its `class_uri` CURIE (`plt:LifecycleDefinition`) expanded with the module's `prefixes`, e.g.
// https://w3id.org/altium/cdm/platform/LifecycleDefinition. Falls back to the module `id` (a namespace ending in
// `/`) when the prefix is not declared; null when the class has no well-formed CURIE.
export function cdmClassIri(doc, cls) {
  const uri = cls?.class_uri;
  if (typeof uri !== 'string' || !/^[A-Za-z][\w-]*:[A-Za-z_]\w*$/.test(uri)) return null;
  const [prefix, local] = uri.split(':');
  const namespace = doc?.prefixes?.[prefix] ?? (typeof doc?.id === 'string' && doc.id.endsWith('/') ? doc.id : null);
  return namespace ? `${namespace}${local}` : null;
}

export function buildCdmIndex(yamlTexts) {
  const index = {};
  for (const text of yamlTexts) {
    const doc = parse(text) ?? {};
    for (const [key, cls] of Object.entries(doc.classes ?? {})) {
      const apiType = annotationValue(cls?.annotations?.platformAPI);
      if (!apiType) continue;
      const page = cdmClassPageName(key, cls);
      const subset = Array.isArray(cls.in_subset) ? cls.in_subset[0] : cls.in_subset ?? null;
      const text = typeof cls.description === 'string' ? cls.description.replace(/\s+/g, ' ').trim() : '';
      const description = text === 'TBD' ? '' : text;
      (index[apiType] ??= []).push({
        cdmClass: page,
        title: cls.title ?? page,
        subset,
        iri: cdmClassIri(doc, cls),
        url: `${CDM_SITE}/classes/${page}/`,
        grid: annotationValue(cls.annotations.grid),
        description,
      });
    }
  }
  for (const entries of Object.values(index)) entries.sort((a, b) => a.cdmClass.localeCompare(b.cdmClass));
  return index;
}

// CDM subsets (= bounded contexts) by key: what the bounded-context overview pages show in their CDM card. `iri` is
// the module `id` as published; it is not shown yet because it is not a resolvable link (see the overview renderer).
export function buildCdmSubsets(yamlTexts) {
  const subsets = {};
  for (const text of yamlTexts) {
    const doc = parse(text) ?? {};
    for (const [key, subset] of Object.entries(doc.subsets ?? {})) {
      const description = typeof subset?.description === 'string' ? subset.description.replace(/\s+/g, ' ').trim() : '';
      subsets[key] = {
        title: typeof subset?.title === 'string' ? subset.title : null,
        description,
        iri: typeof doc.id === 'string' ? doc.id : null,
        url: `${CDM_SITE}/subsets/${encodeURIComponent(key)}/`,
      };
    }
  }
  return subsets;
}
