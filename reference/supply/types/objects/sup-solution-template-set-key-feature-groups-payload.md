---
title: "SupSolutionTemplateSetKeyFeatureGroupsPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-set-key-feature-groups-payload"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetKeyFeatureGroupsPayload

### Returned By

[`supSolutionTemplateSetKeyFeatureGroups`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-solution-template-set-key-feature-groups.md) mutation

```graphql
type SupSolutionTemplateSetKeyFeatureGroupsPayload {
  errors: [SupSolutionTemplateSetKeyFeatureGroupsError!]
  result: SupSolutionTemplateResultPayload
}
```

### Fields

#### `errors` · [`[SupSolutionTemplateSetKeyFeatureGroupsError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-set-key-feature-groups-error.md) list union

#### `result` · [`SupSolutionTemplateResultPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-result-payload.md) object
