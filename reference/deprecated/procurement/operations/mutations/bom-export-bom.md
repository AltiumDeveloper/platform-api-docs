---
title: "bomExportBom"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/procurement/operations/mutations/bom-export-bom"
bounded_context: "Procurement"
kind: "mutations"
experimental: false
deprecated: true
---

# bomExportBom

> **Deprecated:** Use bomExportBomById() instead.

Exports the specified BOM into a file and provides a download URL.

```graphql
bomExportBom(
  input: BomExportBomInput!
): BomExportBomPayload! @deprecated
```

### Arguments

#### `bomExportBom.input` · [`BomExportBomInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-export-bom-input.md) non-null input procurement

### Type

#### [`BomExportBomPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-export-bom-payload.md) object procurement
