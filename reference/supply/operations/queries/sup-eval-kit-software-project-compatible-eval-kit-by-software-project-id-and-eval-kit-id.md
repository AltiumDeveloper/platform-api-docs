---
title: "supEvalKitSoftwareProjectCompatibleEvalKitBySoftwareProjectIdAndEvalKitId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kit-software-project-compatible-eval-kit-by-software-project-id-and-eval-kit-id"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supEvalKitSoftwareProjectCompatibleEvalKitBySoftwareProjectIdAndEvalKitId

The evaluation kit source associated with the software project.

### Type

#### [`SupSoftwareProjectEvalKitSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source.md) object

```graphql
supEvalKitSoftwareProjectCompatibleEvalKitBySoftwareProjectIdAndEvalKitId(
  id: ID!
  softwareProjectId: ID!
): SupSoftwareProjectEvalKitSource
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `softwareProjectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
