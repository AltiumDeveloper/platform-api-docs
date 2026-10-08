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

### Type

#### [`DesReuseBlockRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-revision.md) object

Reuse block revision information.

```graphql
desReuseBlockRevisionById(
  id: ID!
): DesReuseBlockRevision
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The node identifier for a reuse block revision.
