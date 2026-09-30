---
title: "SupSolutionTemplatePatchKeyFeatureGroupInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-patch-key-feature-group-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchKeyFeatureGroupInput

### Member Of

[`SupSolutionTemplatePatchKeyFeatureGroupsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-patch-key-feature-groups-input.md) input

```graphql
input SupSolutionTemplatePatchKeyFeatureGroupInput {
  addKeyFeatureGroups: [SupSolutionTemplateKeyFeatureGroupInput!]
  removeKeyFeatureGroupAttributes: [SupSolutionTemplateRemoveKeyFeatureGroupAttributeInput!]
  solutionTemplateId: ID!
}
```

### Fields

#### `SupSolutionTemplatePatchKeyFeatureGroupInput.addKeyFeatureGroups` · [`[SupSolutionTemplateKeyFeatureGroupInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-key-feature-group-input.md) list input supply

List of new key feature groups associated with a solution template.

#### `SupSolutionTemplatePatchKeyFeatureGroupInput.removeKeyFeatureGroupAttributes` · [`[SupSolutionTemplateRemoveKeyFeatureGroupAttributeInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-remove-key-feature-group-attribute-input.md) list input supply

List of existing key feature groups will be removed from a solution template.

#### `SupSolutionTemplatePatchKeyFeatureGroupInput.solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The solution template identifier.
