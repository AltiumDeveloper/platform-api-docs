---
title: "SupSoftwareProjectCreateSoftwareProjectInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-create-software-project-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectCreateSoftwareProjectInput

Input for software project creation.

### Member Of

[`supSoftwareProjectCreateSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-software-project-create-software-project.md) mutation

```graphql
input SupSoftwareProjectCreateSoftwareProjectInput {
  compatibleEvalKits: [SupSoftwareProjectEvalKitSourceInput!] @deprecated
  description: String
  publisherId: String!
  recommendScore: Int
  title: String!
  type: SupSoftwareProjectType!
}
```

### Fields

#### `SupSoftwareProjectCreateSoftwareProjectInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The software project description.

#### `SupSoftwareProjectCreateSoftwareProjectInput.publisherId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The publisher identifier.

#### `SupSoftwareProjectCreateSoftwareProjectInput.recommendScore` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

The recommendation score. Range is 0 to 65535.

#### `SupSoftwareProjectCreateSoftwareProjectInput.title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The software project title.

#### `SupSoftwareProjectCreateSoftwareProjectInput.type` · [`SupSoftwareProjectType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-type.md) non-null enum supply

The software project type.

#### Deprecated

#### `SupSoftwareProjectCreateSoftwareProjectInput.compatibleEvalKits` · [`[SupSoftwareProjectEvalKitSourceInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-eval-kit-source-input.md) **DEPRECATED** list input supply

> **Deprecated:** CompatibleEvalKits is deprecated and no longer accepted.

The list of evaluation kit sources associated with the software project.
