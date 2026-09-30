---
title: "DesBom"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesBom

A Bill of Materials (BOM) contains a list of all of the parts needed for the assembly of a PCB.

### Member Of

[`DesReleaseVariant`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release-variant.md) object · [`DesWipVariant`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-wip-variant.md) object

```graphql
type DesBom {
  bomItems: [DesBomItem!]! @deprecated
  items(
    after: String
    before: String
    first: Int
    last: Int
  ): DesBomItemConnection
}
```

### Fields

#### `DesBom.items` · [`DesBomItemConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item-connection.md) object design

The list of BOM items returned by pages.

##### `DesBom.items.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesBom.items.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `DesBom.items.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesBom.items.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### Deprecated

#### `DesBom.bomItems` · [`[DesBomItem!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item.md) **DEPRECATED** non-null object design

> **Deprecated:** Use `items`.
