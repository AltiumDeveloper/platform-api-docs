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

#### `SupSoftwareProjectUpdateSoftwareProjectInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The software project description.

#### `SupSoftwareProjectUpdateSoftwareProjectInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The software project identifier.

#### `SupSoftwareProjectUpdateSoftwareProjectInput.publisherId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The publisher identifier.

#### `SupSoftwareProjectUpdateSoftwareProjectInput.recommendScore` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

The recommendation score. Range is 0 to 65535.

#### `SupSoftwareProjectUpdateSoftwareProjectInput.title` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The software project title.

#### `SupSoftwareProjectUpdateSoftwareProjectInput.type` · [`SupSoftwareProjectType`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-type.md) enum supply

The software project type.

#### Deprecated

#### `SupSoftwareProjectUpdateSoftwareProjectInput.addCompatibleEvalKits` · [`[SupSoftwareProjectCreateEvalKitSourceInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-create-eval-kit-source-input.md) **DEPRECATED** list input supply

> **Deprecated:** AddCompatibleEvalKits is deprecated and no longer accepted.

Add a new software project evaluation kit project sources.

#### `SupSoftwareProjectUpdateSoftwareProjectInput.newCompatibleEvalKits` · [`[SupSoftwareProjectEvalKitSourceInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-eval-kit-source-input.md) **DEPRECATED** list input supply

> **Deprecated:** Use 'AddCompatibleEvalKits', 'UpdateCompatibleEvalKits', 'RemoveCompatibleEvalKits' instead.

Replace the current software project evaluation kit sources with these ones.

#### `SupSoftwareProjectUpdateSoftwareProjectInput.removeCompatibleEvalKits` · [`[SupSoftwareProjectRemoveEvalKitSourceInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-remove-eval-kit-source-input.md) **DEPRECATED** list input supply

> **Deprecated:** RemoveCompatibleEvalKits is deprecated and no longer accepted.

Remove current existing evaluation kit project sources.

#### `SupSoftwareProjectUpdateSoftwareProjectInput.updateCompatibleEvalKits` · [`[SupSoftwareProjectUpdateEvalKitSourceInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-update-eval-kit-source-input.md) **DEPRECATED** list input supply

> **Deprecated:** UpdateCompatibleEvalKits is deprecated and no longer accepted.

Update current existing evaluation kit project sources.
