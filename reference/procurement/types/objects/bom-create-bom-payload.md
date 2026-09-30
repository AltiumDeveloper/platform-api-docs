---
title: "BomCreateBomPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-create-bom-payload"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomCreateBomPayload

### Returned By

[`bomCreateBom`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/operations/mutations/bom-create-bom.md) mutation

```graphql
type BomCreateBomPayload {
  bom: BomWip
  errors: [BomError!]!
}
```

### Fields

#### `BomCreateBomPayload.bom` · [`BomWip`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) object procurement

#### `BomCreateBomPayload.errors` · [`[BomError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-error.md) non-null interface procurement
