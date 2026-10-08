---
title: "bomExportBomRelease"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/procurement/operations/mutations/bom-export-bom-release"
bounded_context: "Procurement"
kind: "mutations"
experimental: false
deprecated: true
---

# bomExportBomRelease

> **Deprecated:** Use bomExportBomById() instead.

Exports the specified BOM release into a file and provides a download URL.

### Type

#### [`BomExportBomReleasePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-export-bom-release-payload.md) object

```graphql
bomExportBomRelease(
  input: BomExportBomReleaseInput!
): BomExportBomReleasePayload! @deprecated
```

### Arguments

#### `input` · [`BomExportBomReleaseInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-export-bom-release-input.md) non-null input
