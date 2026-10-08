---
title: "DesDesignExchange"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-exchange"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesDesignExchange

Design exchange models and downloads.

### Member Of

[`DesWipVariant`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-wip-variant.md) object

```graphql
type DesDesignExchange {
  downloadableFile: DesDownloadableFile!
  models3D: [DesModel3D!]!
}
```

### Fields

#### `downloadableFile` · [`DesDownloadableFile!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) non-null object

Design exchange downloadable files.

#### `models3D` · [`[DesModel3D!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-model-3-d.md) non-null object

Design exchange 3D models.
