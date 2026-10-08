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

### Type

#### [`DesProjectIdPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-id-payload.md) object

Payload associated with project node identifier.

```graphql
desProjectIdFromAfsId(
  afsId: String!
  isSharedProject: Boolean
  workspaceUrl: String
): DesProjectIdPayload!
```

### Arguments

#### `afsId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

AFS internal identifier.

#### `isSharedProject` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

True for shared projects.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The web address of a workspace.
