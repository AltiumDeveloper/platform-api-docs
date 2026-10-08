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

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The project description.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The project name.

#### `project` · [`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) object

The project or null if its workspace is deleted. Avoid this field on getting many projects at once. Consider using `projectId` and [`desProjectById`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-by-id.md).

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The project node identifier. Use it for getting the project by [`desProjectById`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-by-id.md).
