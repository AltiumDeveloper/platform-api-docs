---
title: "DesPolygon"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-polygon"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesPolygon

Polygon properties.

### Member Of

[`DesPcb`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-pcb.md) object

```graphql
type DesPolygon {
  vertices: [DesPosition2D!]!
}
```

### Fields

#### `DesPolygon.vertices` · [`[DesPosition2D!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-position-2-d.md) non-null object design

Vertices of polygon.
