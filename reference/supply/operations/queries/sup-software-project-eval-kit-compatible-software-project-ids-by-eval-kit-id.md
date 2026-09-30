---
title: "supSoftwareProjectEvalKitCompatibleSoftwareProjectIdsByEvalKitId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-project-eval-kit-compatible-software-project-ids-by-eval-kit-id"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSoftwareProjectEvalKitCompatibleSoftwareProjectIdsByEvalKitId

Get evaluation kit compatible software project idenfitiers.

```graphql
supSoftwareProjectEvalKitCompatibleSoftwareProjectIdsByEvalKitId(
  evalKitId: ID!
  limit: Int! = 100
  start: Int! = 0
): [ID!]!
```

### Arguments

#### `supSoftwareProjectEvalKitCompatibleSoftwareProjectIdsByEvalKitId.evalKitId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `supSoftwareProjectEvalKitCompatibleSoftwareProjectIdsByEvalKitId.limit` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

#### `supSoftwareProjectEvalKitCompatibleSoftwareProjectIdsByEvalKitId.start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

### Type

#### [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
