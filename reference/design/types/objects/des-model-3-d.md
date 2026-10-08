---
title: "DesModel3D"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-model-3-d"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesModel3D

3D model information.

### Member Of

[`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object · [`DesDesignExchange`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-exchange.md) object

```graphql
type DesModel3D {
  parasolidFile: DesDownloadableFile
}
```

### Fields

#### `parasolidFile` · [`DesDownloadableFile`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) object

The downloadable 3D model Parasolid file.
