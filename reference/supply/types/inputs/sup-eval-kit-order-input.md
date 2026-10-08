---
title: "SupEvalKitOrderInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-order-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitOrderInput

Input type for ordering.

### Member Of

[`supEvalKits`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kits.md) query

```graphql
input SupEvalKitOrderInput {
  direction: SupEvalKitOrderDirection!
  field: SupEvalKitOrderField!
}
```

### Fields

#### `direction` · [`SupEvalKitOrderDirection!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-eval-kit-order-direction.md) non-null enum

The direction of the order.

#### `field` · [`SupEvalKitOrderField!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-eval-kit-order-field.md) non-null enum

The field to order by.
