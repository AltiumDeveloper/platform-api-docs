---
title: "BomOctopartPartReference"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-octopart-part-reference"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomOctopartPartReference

A reference to a part in Octopart.

### Implemented By

[`BomPartReference`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/unions/bom-part-reference.md) union

```graphql
type BomOctopartPartReference {
  partId: String!
}
```

### Fields

#### `BomOctopartPartReference.partId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ID of the part in Octopart.
