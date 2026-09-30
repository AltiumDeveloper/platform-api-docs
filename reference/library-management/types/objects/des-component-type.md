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

#### `DesComponentType.componentTypeId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The reference identifier for this component type.

#### `DesComponentType.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` this was created.

#### `DesComponentType.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this was created by.

#### `DesComponentType.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The display name of the component type.

#### `DesComponentType.parent` · [`DesComponentType`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-type.md) object library-management

The parent of this component type in the hierarchy.

#### `DesComponentType.path` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The full path of the component type.

#### `DesComponentType.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` this was last updated.

#### `DesComponentType.updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this was last updated by.
