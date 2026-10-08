---
title: "DesBomItemInstance"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item-instance"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesBomItemInstance

A Bill of Materials (BOM) item instance contains information for one specific usage of the item.

### Member Of

[`DesBomItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item.md) object

```graphql
type DesBomItemInstance {
  alternateComponent: DesComponent
  designator: String!
  isFitted: Boolean!
}
```

### Fields

#### `alternateComponent` · [`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object Library Management

An alternate component used in this variant.

#### `designator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The unique label for this item.

#### `isFitted` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

The variant use status for this item.
