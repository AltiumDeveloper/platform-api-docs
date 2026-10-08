---
title: "SupEvalKitSoftwareProjectCompatibleEvalKitInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-software-project-compatible-eval-kit-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitSoftwareProjectCompatibleEvalKitInput

Input for software project update.

### Member Of

[`supEvalKitSoftwareProjectCompatibleEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-software-project-compatible-eval-kit.md) mutation

```graphql
input SupEvalKitSoftwareProjectCompatibleEvalKitInput {
  addCompatibleEvalKits: [SupEvalKitCreateSoftwareProjectCompatibleEvalKitInput!]
  id: ID!
  removeCompatibleEvalKits: [SupEvalKitRemoveSoftwareProjectCompatibleEvalKitInput!]
  updateCompatibleEvalKits: [SupEvalKitUpdateSoftwareProjectCompatibleEvalKitInput!]
}
```

### Fields

#### `addCompatibleEvalKits` · [`[SupEvalKitCreateSoftwareProjectCompatibleEvalKitInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-create-software-project-compatible-eval-kit-input.md) list input

Add a new software project evaluation kit project sources.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The software project identifier.

#### `removeCompatibleEvalKits` · [`[SupEvalKitRemoveSoftwareProjectCompatibleEvalKitInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-remove-software-project-compatible-eval-kit-input.md) list input

Remove current existing evaluation kit project sources.

#### `updateCompatibleEvalKits` · [`[SupEvalKitUpdateSoftwareProjectCompatibleEvalKitInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-update-software-project-compatible-eval-kit-input.md) list input

Update current existing evaluation kit project sources.
