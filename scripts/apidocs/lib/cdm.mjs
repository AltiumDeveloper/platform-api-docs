import { parse } from 'yaml';

export const CDM_SITE = 'https://altiumdeveloper.github.io/cdm';

const annotationValue = (annotation) =>
  annotation && typeof annotation === 'object' ? annotation.value ?? null : annotation ?? null;

export function cdmClassPageName(key, cls) {
  const uri = cls?.class_uri;
  if (typeof uri === 'string' && uri.includes(':')) {
    const [prefix, local] = uri.split(':');
    return `${prefix}_${local}`;
  }
  return key;
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
      const description =
        typeof cls.description === 'string' && cls.description.trim() !== 'TBD' ? cls.description.trim() : '';
      (index[apiType] ??= []).push({
        cdmClass: page,
        title: cls.title ?? page,
        subset,
        url: `${CDM_SITE}/classes/${page}/`,
        grid: annotationValue(cls.annotations.grid),
        description,
      });
    }
  }
  for (const entries of Object.values(index)) entries.sort((a, b) => a.cdmClass.localeCompare(b.cdmClass));
  return index;
}
