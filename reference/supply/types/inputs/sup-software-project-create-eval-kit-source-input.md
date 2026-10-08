---
title: "SupSoftwareProjectCreateEvalKitSourceInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-create-eval-kit-source-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectCreateEvalKitSourceInput

### Member Of

[`SupSoftwareProjectUpdateSoftwareProjectInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-update-software-project-input.md) input

```graphql
input SupSoftwareProjectCreateEvalKitSourceInput {
  evalKitId: ID!
  projectSources: [SupSoftwareProjectEvalKitProjectSourceInput!]!
}
```

### Fields

#### `evalKitId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The evaluation kit identifier.

#### `projectSources` · [`[SupSoftwareProjectEvalKitProjectSourceInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-eval-kit-project-source-input.md) non-null input

The project sources associated with the evaluation kit source.
