---
title: "supSoftwareProjectEvalKitCompatibleSoftwareProjectsByEvalKitId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-project-eval-kit-compatible-software-projects-by-eval-kit-id"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSoftwareProjectEvalKitCompatibleSoftwareProjectsByEvalKitId

Get evaluation kit compatible software projects.

```graphql
supSoftwareProjectEvalKitCompatibleSoftwareProjectsByEvalKitId(
  evalKitId: ID!
  limit: Int! = 100
  start: Int! = 0
): [SupSoftwareProject!]!
```

### Arguments

#### `supSoftwareProjectEvalKitCompatibleSoftwareProjectsByEvalKitId.evalKitId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `supSoftwareProjectEvalKitCompatibleSoftwareProjectsByEvalKitId.limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

#### `supSoftwareProjectEvalKitCompatibleSoftwareProjectsByEvalKitId.start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

### Type

#### [`SupSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) object supply
