---
title: "desComponentById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-component-by-id"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desComponentById

Search a specific component by its unique identifier.

### Type

#### [`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object

A component contains the parametric details of a PCB part.

```graphql
desComponentById(
  id: ID!
): DesComponent
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier for a component.
