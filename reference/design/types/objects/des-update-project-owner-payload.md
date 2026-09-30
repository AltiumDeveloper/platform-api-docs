---
title: "DesUpdateProjectOwnerPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-update-project-owner-payload"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateProjectOwnerPayload

Payload associated with updating project owner.

### Returned By

[`desUpdateProjectOwner`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/des-update-project-owner.md) mutation

```graphql
type DesUpdateProjectOwnerPayload {
  projectId: ID!
}
```

### Fields

#### `DesUpdateProjectOwnerPayload.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Project identifier.
