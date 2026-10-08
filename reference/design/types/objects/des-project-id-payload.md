---
title: "DesProjectIdPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-id-payload"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesProjectIdPayload

Payload associated with project node identifier.

### Returned By

[`desProjectIdFromAfsId`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-id-from-afs-id.md) query

```graphql
type DesProjectIdPayload {
  id: ID!
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The project identifier.
