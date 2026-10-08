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

### Type

#### [`DesCollaborationSimulationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-simulation-revision.md) object

\*PROTOTYPE, SUBJECT TO CHANGE\*

```graphql
desProjectCollaborationSimulationLatestRevision(
  domainName: String!
  projectId: ID!
  projectTypeName: String!
): DesCollaborationSimulationRevision
```

### Arguments

#### `domainName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The collaboration domain name.

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The project identifier.

#### `projectTypeName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The project type name.
