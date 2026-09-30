---
title: "desProjectIdFromAfsId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-id-from-afs-id"
bounded_context: "Design"
kind: "queries"
experimental: false
deprecated: false
---

# desProjectIdFromAfsId

Gets the project identifier from its internal identifier.

```graphql
desProjectIdFromAfsId(
  afsId: String!
  isSharedProject: Boolean
  workspaceUrl: String
): DesProjectIdPayload!
```

### Arguments

#### `desProjectIdFromAfsId.afsId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

AFS internal identifier.

#### `desProjectIdFromAfsId.isSharedProject` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

True for shared projects.

#### `desProjectIdFromAfsId.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The web address of a workspace.

### Type

#### [`DesProjectIdPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-id-payload.md) object design

Payload associated with project node identifier.
