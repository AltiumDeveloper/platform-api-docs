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

#### `items` · [`DesBomItemConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item-connection.md) object

The list of BOM items returned by pages.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### Deprecated

#### `bomItems` · [`[DesBomItem!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item.md) **DEPRECATED** non-null object

> **Deprecated:** Use `items`.
