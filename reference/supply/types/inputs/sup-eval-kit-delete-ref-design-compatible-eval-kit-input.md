---
title: "SupEvalKitDeleteRefDesignCompatibleEvalKitInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-delete-ref-design-compatible-eval-kit-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitDeleteRefDesignCompatibleEvalKitInput

Input for deleting compatible evaluation kits from a reference design.

### Member Of

[`supEvalKitDeleteRefDesignCompatibleEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-delete-ref-design-compatible-eval-kit.md) mutation

```graphql
input SupEvalKitDeleteRefDesignCompatibleEvalKitInput {
  evalKitIds: [ID!]!
  refDesignId: ID!
}
```

### Fields

#### `evalKitIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The list of evaluation kit IDs to be deleted from the compatible evaluation kits of the reference design.

#### `refDesignId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The ID of the reference design from which compatible evaluation kits will be deleted.
