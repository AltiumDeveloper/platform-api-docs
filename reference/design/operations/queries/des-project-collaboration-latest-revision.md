---
title: "desProjectCollaborationLatestRevision"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-collaboration-latest-revision"
bounded_context: "Design"
kind: "queries"
experimental: false
deprecated: false
---

# desProjectCollaborationLatestRevision

The project latest ECAD, MCAD or ESD revision.

### Type

#### [`DesCollaborationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision.md) object

ECAD, MCAD or ESD revision data.

```graphql
desProjectCollaborationLatestRevision(
  domain: DesCollaborationDomain!
  projectId: ID!
): DesCollaborationRevision
```

### Arguments

#### `domain` · [`DesCollaborationDomain!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-collaboration-domain.md) non-null enum

The collaboration domain.

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier for a specific project.
