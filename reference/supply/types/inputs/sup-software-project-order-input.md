---
title: "SupSoftwareProjectOrderInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-order-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectOrderInput

Input type for ordering.

### Member Of

[`supSoftwareProjects`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-projects.md) query

```graphql
input SupSoftwareProjectOrderInput {
  direction: SupSoftwareProjectOrderDirection!
  field: SupSoftwareProjectOrderField!
}
```

### Fields

#### `SupSoftwareProjectOrderInput.direction` · [`SupSoftwareProjectOrderDirection!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-order-direction.md) non-null enum supply

The direction of the order.

#### `SupSoftwareProjectOrderInput.field` · [`SupSoftwareProjectOrderField!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-order-field.md) non-null enum supply

The field to order by.
