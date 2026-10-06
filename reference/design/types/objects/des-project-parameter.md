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

- [Project Parameter](https://altiumdeveloper.github.io/cdm/classes/des_ProjectParameter/) — A name/value parameter defined at the level of a design project. It is either a Workspace-side (server-side) parameter, kept with the project in the Workspace and editable only there, or a design-side parameter, kept in the project file (e.g. \*.PrjPcb) and editable in Altium Designer. Both kinds appear in the project options and can be used as special strings in design documents.

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
