---
title: "SupEvalKitAddRefDesignCompatibleEvalKitInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-add-ref-design-compatible-eval-kit-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitAddRefDesignCompatibleEvalKitInput

Input for adding compatible evaluation kits to a reference design.

### Member Of

[`supEvalKitAddRefDesignCompatibleEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-add-ref-design-compatible-eval-kit.md) mutation

```graphql
input SupEvalKitAddRefDesignCompatibleEvalKitInput {
  evalKitIds: [ID!]!
  refDesignId: ID!
}
```

### Fields

#### `SupEvalKitAddRefDesignCompatibleEvalKitInput.evalKitIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The list of evaluation kit IDs to be added as compatible with the reference design.

#### `SupEvalKitAddRefDesignCompatibleEvalKitInput.refDesignId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The ID of the reference design to which the evaluation kits will be added.
