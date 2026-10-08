---
title: "SupSoftwareProjectUpdateSoftwareProjectInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-update-software-project-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectUpdateSoftwareProjectInput

Input for software project update.

### Member Of

[`supSoftwareProjectUpdateSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-software-project-update-software-project.md) mutation

```graphql
input SupSoftwareProjectUpdateSoftwareProjectInput {
  addCompatibleEvalKits: [SupSoftwareProjectCreateEvalKitSourceInput!] @deprecated
  description: String
  id: ID!
  newCompatibleEvalKits: [SupSoftwareProjectEvalKitSourceInput!] @deprecated
  publisherId: String
  recommendScore: Int
  removeCompatibleEvalKits: [SupSoftwareProjectRemoveEvalKitSourceInput!] @deprecated
  title: String
  type: SupSoftwareProjectType
  updateCompatibleEvalKits: [SupSoftwareProjectUpdateEvalKitSourceInput!] @deprecated
}
```

### Fields

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The software project description.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The software project identifier.

#### `publisherId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The publisher identifier.

#### `recommendScore` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

The recommendation score. Range is 0 to 65535.

#### `title` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The software project title.

#### `type` · [`SupSoftwareProjectType`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-type.md) enum

The software project type.

#### Deprecated

#### `addCompatibleEvalKits` · [`[SupSoftwareProjectCreateEvalKitSourceInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-create-eval-kit-source-input.md) **DEPRECATED** list input

> **Deprecated:** AddCompatibleEvalKits is deprecated and no longer accepted.

Add a new software project evaluation kit project sources.

#### `newCompatibleEvalKits` · [`[SupSoftwareProjectEvalKitSourceInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-eval-kit-source-input.md) **DEPRECATED** list input

> **Deprecated:** Use 'AddCompatibleEvalKits', 'UpdateCompatibleEvalKits', 'RemoveCompatibleEvalKits' instead.

Replace the current software project evaluation kit sources with these ones.

#### `removeCompatibleEvalKits` · [`[SupSoftwareProjectRemoveEvalKitSourceInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-remove-eval-kit-source-input.md) **DEPRECATED** list input

> **Deprecated:** RemoveCompatibleEvalKits is deprecated and no longer accepted.

Remove current existing evaluation kit project sources.

#### `updateCompatibleEvalKits` · [`[SupSoftwareProjectUpdateEvalKitSourceInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-update-eval-kit-source-input.md) **DEPRECATED** list input

> **Deprecated:** UpdateCompatibleEvalKits is deprecated and no longer accepted.

Update current existing evaluation kit project sources.
