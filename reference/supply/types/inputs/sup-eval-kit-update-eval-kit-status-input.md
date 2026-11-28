---
title: "SupEvalKitUpdateEvalKitStatusInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-update-eval-kit-status-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitUpdateEvalKitStatusInput

Input for evaluation kit status update.

### Member Of

[`supEvalKitUpdateEvalKitStatus`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-update-eval-kit-status.md) mutation

```graphql
input SupEvalKitUpdateEvalKitStatusInput {
  id: ID!
  status: SupEvalKitStatus!
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The evaluation kit identifier.

#### `status` · [`SupEvalKitStatus!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-eval-kit-status.md) non-null enum

The status of an evaluation kit to update.
