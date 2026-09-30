---
title: "SupSolutionTemplateSetTagsPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-set-tags-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetTagsPayload

### Returned By

[`supSolutionTemplateSetTags`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-set-tags.md) mutation

```graphql
type SupSolutionTemplateSetTagsPayload {
  errors: [SupSolutionTemplateSetTagsError!]
  result: SupSolutionTemplateResultPayload
}
```

### Fields

#### `SupSolutionTemplateSetTagsPayload.errors` · [`[SupSolutionTemplateSetTagsError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-set-tags-error.md) list union supply

#### `SupSolutionTemplateSetTagsPayload.result` · [`SupSolutionTemplateResultPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-result-payload.md) object supply
