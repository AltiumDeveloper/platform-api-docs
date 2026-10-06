---
title: "DesComponentParameter"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-parameter"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesComponentParameter

Parameter describing a component.

### Common Data Model

- [Component Parameter](https://altiumdeveloper.github.io/cdm/classes/lib_ComponentParameter/) — A named parameter of a Workspace component, holding a value and, optionally, a data type. Parameters can be inherited from a component template or added directly to the component; a template can give them unit-aware (e.g. Farad, Ohm) or dictionary-defined types.

### Member Of

[`DesComponentDetails`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-details.md) object

```graphql
type DesComponentParameter {
  name: String!
  realValue: String
  type: DesParameterType!
  value: String!
}
```

### Fields

#### `DesComponentParameter.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Parameter name.

#### `DesComponentParameter.realValue` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Component parameter real value in scientific notation.

#### `DesComponentParameter.type` · [`DesParameterType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/enums/des-parameter-type.md) non-null enum library-management

Component parameter type.

#### `DesComponentParameter.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Parameter value.
