---
title: "DesProjectParameter"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-parameter"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesProjectParameter

A parameter describing the project.

### Common Data Model

- [Project Parameter](https://altiumdeveloper.github.io/cdm/classes/des_ProjectParameter/)

### Member Of

[`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) object

```graphql
type DesProjectParameter {
  name: String!
  value: String!
}
```

### Fields

#### `DesProjectParameter.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Parameter name.

#### `DesProjectParameter.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Parameter value.
