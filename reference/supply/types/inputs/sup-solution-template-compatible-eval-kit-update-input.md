---
title: "SupSolutionTemplateCompatibleEvalKitUpdateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-compatible-eval-kit-update-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateCompatibleEvalKitUpdateInput

Input for updating an existing compatible eval kit on a solution template.

### Member Of

[`SupSolutionTemplatePatchCompatibleEvalKitsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-patch-compatible-eval-kits-input.md) input

```graphql
input SupSolutionTemplateCompatibleEvalKitUpdateInput {
  addParameters: [SupSolutionTemplateParameterBundleInput!]
  compatibleEvalKitId: String!
  evalKitId: ID
  removeParameterTitles: [String!]
  updateParameters: [SupSolutionTemplateParameterBundleInput!]
}
```

### Fields

#### `addParameters` · [`[SupSolutionTemplateParameterBundleInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-parameter-bundle-input.md) list input

Parameters to add to this compatible eval kit. Fails if a title already exists on it.

#### `compatibleEvalKitId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the existing compatible eval kit to update.

#### `evalKitId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The new evaluation kit identifier, if changing which eval kit this row points to.

#### `removeParameterTitles` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Parameter titles to remove from this compatible eval kit.

#### `updateParameters` · [`[SupSolutionTemplateParameterBundleInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-solution-template-parameter-bundle-input.md) list input

Parameters to update on this compatible eval kit. Fails if a title does not already exist on it.
