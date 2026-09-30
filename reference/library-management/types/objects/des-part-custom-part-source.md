---
title: "DesPartCustomPartSource"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-source"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartCustomPartSource

Represents a custom part source.

### Member Of

[`DesPartCustomPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part.md) object

```graphql
type DesPartCustomPartSource {
  name: String!
  partSourceId: String!
}
```

### Fields

#### `DesPartCustomPartSource.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The display name.

#### `DesPartCustomPartSource.partSourceId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the part source.
