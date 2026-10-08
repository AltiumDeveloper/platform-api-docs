---
title: "BomCreateBomProductionSettingsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-production-settings-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomCreateBomProductionSettingsInput

Production-related settings of a BOM (e.g., a 'production quantity' or a 'due date').

### Member Of

[`BomCreateBomInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-input.md) input

```graphql
input BomCreateBomProductionSettingsInput {
  dueDate: LocalDate
  quantity: Int!
}
```

### Fields

#### `dueDate` · [`LocalDate`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/local-date.md) scalar

Production due date.

#### `quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Production quantity (i.e., how many units are produced).
