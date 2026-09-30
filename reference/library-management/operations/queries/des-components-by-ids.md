---
title: "desComponentsByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-components-by-ids"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desComponentsByIds

Searches multiple components by their unique identifiers.

```graphql
desComponentsByIds(
  ids: [ID!]!
): [DesUnionPayload!]!
```

### Arguments

#### `desComponentsByIds.ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifiers for components.

### Type

#### [`DesUnionPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/unions/des-union-payload.md) union library-management

Union type for various payloads.
