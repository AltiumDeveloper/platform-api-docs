---
title: "DesCadProperty"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-property"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesCadProperty

Information about a property in CAD.

### Member Of

[`DesCadBoardComponentType`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-component-type.md) object · [`DesCadBoardVariant`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-variant.md) object · [`DesCadDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-design.md) object

```graphql
type DesCadProperty {
  name: String!
  value: String
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

CAD property name.

#### `value` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

CAD property value.
