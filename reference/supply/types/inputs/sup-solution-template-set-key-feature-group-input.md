---
title: "SupSolutionTemplateSetKeyFeatureGroupInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-set-key-feature-group-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetKeyFeatureGroupInput

### Member Of

[`SupSolutionTemplateSetKeyFeatureGroupsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-set-key-feature-groups-input.md) input

```graphql
input SupSolutionTemplateSetKeyFeatureGroupInput {
  keyFeatureGroups: [SupSolutionTemplateKeyFeatureGroupInput!]
  solutionTemplateId: ID!
}
```

### Fields

#### `SupSolutionTemplateSetKeyFeatureGroupInput.keyFeatureGroups` · [`[SupSolutionTemplateKeyFeatureGroupInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-key-feature-group-input.md) list input supply

List of new key feature groups associated with a solution template.

#### `SupSolutionTemplateSetKeyFeatureGroupInput.solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The solution template identifier.
