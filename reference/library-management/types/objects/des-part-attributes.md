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

#### `DesPartAttributes.customPart` · [`[DesPartAttribute!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attribute.md) list object library-management

The custom part attributes.

#### `DesPartAttributes.siliconExpertPart` · [`[DesPartAttribute!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attribute.md) list object library-management

The \*SiliconExpert\* part attributes.

#### `DesPartAttributes.supplyPart` · [`[DesPartAttribute!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attribute.md) list object library-management

The supply part attributes.

#### `DesPartAttributes.z2DataPart` · [`[DesPartAttribute!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attribute.md) list object library-management

The \*Z2Data\* part attributes.
