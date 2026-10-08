---
title: "DesPartSource"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-source"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartSource

Represents a part source.

### Member Of

[`DesPartSellerWithOffers`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-seller-with-offers.md) object

```graphql
type DesPartSource {
  name: String!
  partSourceGuid: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the source.

#### `partSourceGuid` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the source.
