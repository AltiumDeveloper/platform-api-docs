---
title: "BomProduction"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-production"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomProduction

Production-related settings of a BOM (e.g., a 'production quantity' or a 'due date').

### Member Of

[`BomSettings`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-settings.md) object

```graphql
type BomProduction {
  dueDate: LocalDate
  quantity: Int!
}
```

### Fields

#### `BomProduction.dueDate` · [`LocalDate`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/local-date.md) scalar common

Production due date.

#### `BomProduction.quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Production quantity (i.e., how many units are produced).
