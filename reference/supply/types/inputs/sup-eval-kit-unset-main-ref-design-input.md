---
title: "SupEvalKitUnsetMainRefDesignInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-unset-main-ref-design-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitUnsetMainRefDesignInput

Input for unsetting the main reference design of an evaluation kit.

### Member Of

[`supEvalKitUnsetMainRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-unset-main-ref-design.md) mutation

```graphql
input SupEvalKitUnsetMainRefDesignInput {
  evalKitId: ID!
  refDesignId: ID!
}
```

### Fields

#### `evalKitId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the evaluation kit.

#### `refDesignId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the reference design to unset as main.
