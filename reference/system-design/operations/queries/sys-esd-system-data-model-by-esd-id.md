---
title: "sysEsdSystemDataModelByEsdId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-esd-system-data-model-by-esd-id"
bounded_context: "System Design"
kind: "queries"
experimental: false
deprecated: false
---

# sysEsdSystemDataModelByEsdId

Builds the System Data Model from the ESD Document and returns it as JSON.

### Type

#### [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

```graphql
sysEsdSystemDataModelByEsdId(
  id: ID!
): String!
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
