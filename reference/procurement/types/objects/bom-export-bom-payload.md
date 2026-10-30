---
title: "BomExportBomPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-export-bom-payload"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomExportBomPayload

Result of exporting a BOM to a file.

### Returned By

[`bomExportBom`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/procurement/operations/mutations/bom-export-bom.md) mutation · [`bomExportBomById`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/operations/mutations/bom-export-bom-by-id.md) mutation

```graphql
type BomExportBomPayload {
  downloadUrl: URL
}
```

### Fields

#### `downloadUrl` · [`URL`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/url.md) scalar

URL to download the exported BOM file, if the export succeeded.
