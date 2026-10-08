---
title: "SupSolutionTemplatePatchTagsPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-patch-tags-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchTagsPayload

### Returned By

[`supSolutionTemplatePatchTags`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-patch-tags.md) mutation

```graphql
type SupSolutionTemplatePatchTagsPayload {
  errors: [SupSolutionTemplatePatchTagsError!]
  result: SupSolutionTemplateResultPayload
}
```

### Fields

#### `errors` · [`[SupSolutionTemplatePatchTagsError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-patch-tags-error.md) list union

#### `result` · [`SupSolutionTemplateResultPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-result-payload.md) object
