---
title: "desProjectCollaborationSimulationLatestRevision"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-collaboration-simulation-latest-revision"
bounded_context: "Design"
kind: "queries"
experimental: false
deprecated: false
---

# desProjectCollaborationSimulationLatestRevision

\*PROTOTYPE, SUBJECT TO CHANGE\*

```graphql
desProjectCollaborationSimulationLatestRevision(
  domainName: String!
  projectId: ID!
  projectTypeName: String!
): DesCollaborationSimulationRevision
```

### Arguments

#### `desProjectCollaborationSimulationLatestRevision.domainName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The collaboration domain name.

#### `desProjectCollaborationSimulationLatestRevision.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The project identifier.

#### `desProjectCollaborationSimulationLatestRevision.projectTypeName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The project type name.

### Type

#### [`DesCollaborationSimulationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-simulation-revision.md) object design

\*PROTOTYPE, SUBJECT TO CHANGE\*
