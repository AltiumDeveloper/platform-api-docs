---
title: "BomCreateBomPackagingPrioritiesSettingsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-packaging-priorities-settings-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomCreateBomPackagingPrioritiesSettingsInput

Specifies priorities of different packaging types. This affects the offer selection in the order list.

### Member Of

[`BomCreateBomInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-input.md) input

```graphql
input BomCreateBomPackagingPrioritiesSettingsInput {
  enabled: Boolean!
  order: [BomPackagingType!]!
}
```

### Fields

#### `enabled` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Specifies whether to use packaging type priorities or not.

#### `order` · [`[BomPackagingType!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/enums/bom-packaging-type.md) non-null enum

Specifies the preferred order of packaging types. Not specified packaging types will be assigned with the lowest priority.
