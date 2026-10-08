---
title: "DesPartCustomPartSpec"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-spec"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartCustomPartSpec

Represents a custom part specification.

### Member Of

[`DesPartCustomPartData`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-custom-part-data.md) object

```graphql
type DesPartCustomPartSpec {
  name: String!
  value: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The display name.

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The value.
