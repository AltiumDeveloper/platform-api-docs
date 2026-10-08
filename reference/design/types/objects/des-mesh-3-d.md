---
title: "DesMesh3D"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-mesh-3-d"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesMesh3D

3D mesh information.

### Member Of

[`DesDesignItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item.md) object · [`DesPcb`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb.md) object

```graphql
type DesMesh3D {
  glbFile: DesDownloadableFile
}
```

### Fields

#### `glbFile` · [`DesDownloadableFile`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-downloadable-file.md) object

The downloadable file for the 3D mesh.
