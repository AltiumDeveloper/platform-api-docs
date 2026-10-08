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

- [Component Parameter](https://w3id.org/altium/cdm/library/ComponentParameter) — A named parameter of a Workspace component, holding a value and, optionally, a data type. Parameters can be inherited from a component template or added directly to the component; a template can give them unit-aware (e.g. Farad, Ohm) or dictionary-defined types.
  - IRI: [`https://w3id.org/altium/cdm/library/ComponentParameter`](https://w3id.org/altium/cdm/library/ComponentParameter)

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

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Parameter name.

#### `realValue` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Component parameter real value in scientific notation.

#### `type` · [`DesParameterType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/enums/des-parameter-type.md) non-null enum

Component parameter type.

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Parameter value.
