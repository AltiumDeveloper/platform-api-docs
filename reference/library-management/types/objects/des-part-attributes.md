---
title: "DesPartAttributes"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attributes"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartAttributes

Represents part attributes by provider.

### Returned By

[`desPartAttributesByProvider`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-attributes-by-provider.md) query

```graphql
type DesPartAttributes {
  customPart: [DesPartAttribute!]
  siliconExpertPart: [DesPartAttribute!]
  supplyPart: [DesPartAttribute!]
  z2DataPart: [DesPartAttribute!]
}
```

### Fields

#### `customPart` · [`[DesPartAttribute!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attribute.md) list object

The custom part attributes.

#### `siliconExpertPart` · [`[DesPartAttribute!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attribute.md) list object

The \*SiliconExpert\* part attributes.

#### `supplyPart` · [`[DesPartAttribute!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attribute.md) list object

The supply part attributes.

#### `z2DataPart` · [`[DesPartAttribute!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attribute.md) list object

The \*Z2Data\* part attributes.
