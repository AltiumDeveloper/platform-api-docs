---
title: "SupRefPart"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-part"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefPart

### Returned By

[`supRefParts`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-ref-parts.md) query

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) object

```graphql
type SupRefPart {
  designators: [String!]!
  partId: String!
  type: SupRefPartType!
}
```

### Fields

#### `designators` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The global identifier linked to the reference design components.

#### `partId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The part identifier.

#### `type` · [`SupRefPartType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-part-type.md) non-null enum

The type identifier of this component, indicating its role in the reference design.
