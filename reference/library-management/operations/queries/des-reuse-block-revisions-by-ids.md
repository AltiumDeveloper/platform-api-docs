---
title: "desReuseBlockRevisionsByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-block-revisions-by-ids"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desReuseBlockRevisionsByIds

Find specific reuse block revisions by their unique identifiers.

```graphql
desReuseBlockRevisionsByIds(
  ids: [ID!]!
): [DesReuseBlockRevision]!
```

### Arguments

#### `desReuseBlockRevisionsByIds.ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Node identifiers for the reuse block revisions.

### Type

#### [`DesReuseBlockRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-revision.md) object library-management

Reuse block revision information.
