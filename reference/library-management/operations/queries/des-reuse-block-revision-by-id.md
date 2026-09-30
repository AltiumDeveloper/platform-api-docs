---
title: "desReuseBlockRevisionById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-block-revision-by-id"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desReuseBlockRevisionById

Find a specific reuse block revision by its unique identifier.

```graphql
desReuseBlockRevisionById(
  id: ID!
): DesReuseBlockRevision
```

### Arguments

#### `desReuseBlockRevisionById.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The node identifier for a reuse block revision.

### Type

#### [`DesReuseBlockRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-revision.md) object library-management

Reuse block revision information.
