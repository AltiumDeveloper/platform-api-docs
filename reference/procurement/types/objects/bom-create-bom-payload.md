---
title: "BomCreateBomPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-create-bom-payload"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomCreateBomPayload

Result of creating a new BOM.

### Returned By

[`bomCreateBom`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/operations/mutations/bom-create-bom.md) mutation

```graphql
type BomCreateBomPayload {
  bom: BomWip
  errors: [BomError!]!
}
```

### Fields

#### `bom` · [`BomWip`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) object

The created BOM, if the mutation succeeded.

#### `errors` · [`[BomError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-error.md) non-null interface

Errors that occurred while executing the mutation, if any.
