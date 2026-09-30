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

```graphql
desProjectCollaborationLatestRevision(
  domain: DesCollaborationDomain!
  projectId: ID!
): DesCollaborationRevision
```

### Arguments

#### `desProjectCollaborationLatestRevision.domain` · [`DesCollaborationDomain!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-collaboration-domain.md) non-null enum design

The collaboration domain.

#### `desProjectCollaborationLatestRevision.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier for a specific project.

### Type

#### [`DesCollaborationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision.md) object design

ECAD, MCAD or ESD revision data.
