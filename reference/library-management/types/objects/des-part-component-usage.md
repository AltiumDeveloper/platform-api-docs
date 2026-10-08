---
title: "DesPartComponentUsage"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-component-usage"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartComponentUsage

Represents a component usage.

### Member Of

[`DesPartUsages`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-usages.md) object

```graphql
type DesPartComponentUsage {
  id: ID!
  partChoiceIds: [String!]!
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the component.

#### `partChoiceIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A collection of part choice identifiers.
