---
title: "SupEvalKitUpdateSoftwareProjectCompatibleEvalKitInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-update-software-project-compatible-eval-kit-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitUpdateSoftwareProjectCompatibleEvalKitInput

### Member Of

[`SupEvalKitSoftwareProjectCompatibleEvalKitInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-software-project-compatible-eval-kit-input.md) input

```graphql
input SupEvalKitUpdateSoftwareProjectCompatibleEvalKitInput {
  compatibleEvalKitId: String!
  evalKitId: ID!
  newProjectSources: [SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput!]
}
```

### Fields

#### `compatibleEvalKitId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The compatible evaluation kit identifier.

#### `evalKitId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The evaluation kit identifier.

#### `newProjectSources` · [`[SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-software-project-compatible-eval-kit-project-source-input.md) list input

Replace the current software project evaluation kit project sources with these ones.
