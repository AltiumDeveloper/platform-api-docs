---
title: "DesPartCustomPart"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartCustomPart

Represents a custom part.

### Member Of

[`DesPartCustomPartSearchResultItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-search-result-item.md) object

```graphql
type DesPartCustomPart {
  part: DesPartCustomPartData!
  source: DesPartCustomPartSource!
}
```

### Fields

#### `DesPartCustomPart.part` · [`DesPartCustomPartData!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-data.md) non-null object library-management

The custom part data.

#### `DesPartCustomPart.source` · [`DesPartCustomPartSource!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-source.md) non-null object library-management

The custom part source.
