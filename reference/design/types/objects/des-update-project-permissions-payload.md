---
title: "DesUpdateProjectPermissionsPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-update-project-permissions-payload"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateProjectPermissionsPayload

Payload associated with updating project permissions.

### Returned By

[`desUpdateProjectPermissions`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/des-update-project-permissions.md) mutation

```graphql
type DesUpdateProjectPermissionsPayload {
  projectId: ID!
}
```

### Fields

#### `DesUpdateProjectPermissionsPayload.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Project identifier.
