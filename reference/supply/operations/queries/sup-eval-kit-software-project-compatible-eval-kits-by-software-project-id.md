---
title: "supEvalKitSoftwareProjectCompatibleEvalKitsBySoftwareProjectId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kit-software-project-compatible-eval-kits-by-software-project-id"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supEvalKitSoftwareProjectCompatibleEvalKitsBySoftwareProjectId

The list of evaluation kit sources associated with the software project.

### Type

#### [`SupSoftwareProjectEvalKitSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source.md) object

```graphql
supEvalKitSoftwareProjectCompatibleEvalKitsBySoftwareProjectId(
  softwareProjectId: ID!
): [SupSoftwareProjectEvalKitSource!]
```

### Arguments

#### `softwareProjectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
