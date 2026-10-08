---
title: "DesComponentType"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-type"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesComponentType

Represents a component type classification in the component library.

### Member Of

[`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object · [`DesComponentType`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-type.md) object · [`DesComponentTypeConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-type-connection.md) object · [`DesComponentTypeEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-type-edge.md) object

```graphql
type DesComponentType {
  componentTypeId: String!
  createdAt: DateTime!
  createdBy: DesUser!
  name: String!
  parent: DesComponentType
  path: String!
  updatedAt: DateTime!
  updatedBy: DesUser!
}
```

### Fields

#### `componentTypeId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference identifier for this component type.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) this was created.

#### `createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The user this was created by.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The display name of the component type.

#### `parent` · [`DesComponentType`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-type.md) object

The parent of this component type in the hierarchy.

#### `path` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The full path of the component type.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) this was last updated.

#### `updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object Platform

The user this was last updated by.
