---
title: "DesSharedWithMeProjectInfo"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-shared-with-me-project-info"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesSharedWithMeProjectInfo

Information about a project that is shared with the user.

### Member Of

[`DesSharedWithMeProjectInfoConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-shared-with-me-project-info-connection.md) object · [`DesSharedWithMeProjectInfoEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-shared-with-me-project-info-edge.md) object

```graphql
type DesSharedWithMeProjectInfo {
  description: String!
  name: String!
  project: DesProject
  projectId: ID!
}
```

### Fields

#### `DesSharedWithMeProjectInfo.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The project description.

#### `DesSharedWithMeProjectInfo.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The project name.

#### `DesSharedWithMeProjectInfo.project` · [`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) object design

The project or null if its workspace is deleted. Avoid this field on getting many projects at once. Consider using `projectId` and `desProjectById`.

#### `DesSharedWithMeProjectInfo.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The project node identifier. Use it for getting the project by `desProjectById`.
