---
title: "SupSoftwareProjectUpdateEvalKitSourceInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-update-eval-kit-source-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectUpdateEvalKitSourceInput

### Member Of

[`SupSoftwareProjectUpdateSoftwareProjectInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-update-software-project-input.md) input

```graphql
input SupSoftwareProjectUpdateEvalKitSourceInput {
  compatibleEvalKitId: String!
  evalKitId: ID!
  newProjectSources: [SupSoftwareProjectEvalKitProjectSourceInput!]
}
```

### Fields

#### `SupSoftwareProjectUpdateEvalKitSourceInput.compatibleEvalKitId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The compatible evaluation kit identifier.

#### `SupSoftwareProjectUpdateEvalKitSourceInput.evalKitId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The evaluation kit identifier.

#### `SupSoftwareProjectUpdateEvalKitSourceInput.newProjectSources` · [`[SupSoftwareProjectEvalKitProjectSourceInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-eval-kit-project-source-input.md) list input supply

Replace the current software project evaluation kit project sources with these ones.
