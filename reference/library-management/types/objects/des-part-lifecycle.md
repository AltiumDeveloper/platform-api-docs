---
title: "DesPartLifecycle"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-lifecycle"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartLifecycle

Represents the lifecycle of a managed part.

### Member Of

[`DesPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part.md) object

```graphql
type DesPartLifecycle {
  currentLifecycleStateId: String!
  definition: DesLifeCycleDefinition!
}
```

### Fields

#### `currentLifecycleStateId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the current lifecycle state.

#### `definition` · [`DesLifeCycleDefinition!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-definition.md) non-null object Platform

The lifecycle definition of the part.
