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

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The software project description.

#### `publisherId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The publisher identifier.

#### `recommendScore` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

The recommendation score. Range is 0 to 65535.

#### `title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The software project title.

#### `type` · [`SupSoftwareProjectType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-type.md) non-null enum

The software project type.

#### Deprecated

#### `compatibleEvalKits` · [`[SupSoftwareProjectEvalKitSourceInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-eval-kit-source-input.md) **DEPRECATED** list input

> **Deprecated:** CompatibleEvalKits is deprecated and no longer accepted.

The list of evaluation kit sources associated with the software project.
