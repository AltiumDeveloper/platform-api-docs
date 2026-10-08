---
title: "SupSolutionTemplateResultPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-result-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateResultPayload

### Member Of

[`SupSolutionTemplatePatchKeyFeatureGroupsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-patch-key-feature-groups-payload.md) object · [`SupSolutionTemplatePatchTagsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-patch-tags-payload.md) object · [`SupSolutionTemplateSetKeyFeatureGroupsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-set-key-feature-groups-payload.md) object · [`SupSolutionTemplateSetTagsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-set-tags-payload.md) object

```graphql
type SupSolutionTemplateResultPayload {
  success: Boolean!
}
```

### Fields

#### `success` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Return true if operation succeeded.
