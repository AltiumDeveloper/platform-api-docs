---
title: "SupEvalKitUpdateEvalKitInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-update-eval-kit-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitUpdateEvalKitInput

Input for evaluation kit update.

### Member Of

[`supEvalKitUpdateEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-update-eval-kit.md) mutation

```graphql
input SupEvalKitUpdateEvalKitInput {
  addCompatibleSoftwareProjectIds: [ID!] @deprecated
  addPartIds: [String!]
  addRefDesignIds: [ID!]
  description: String
  id: ID!
  newPreviewImages: [SupEvalKitFileInput!]
  publisherId: String
  removeCompatibleSoftwareProjectIds: [ID!] @deprecated
  removePartIds: [String!]
  removeRefDesignIds: [ID!]
  sourceFile: SupEvalKitFileInput
  sourceUrl: String
  title: String
}
```

### Fields

#### `SupEvalKitUpdateEvalKitInput.addPartIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Add list of Part identifiers associated with the evaluation kit.

#### `SupEvalKitUpdateEvalKitInput.addRefDesignIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar common

Add list of Reference Design identifiers associated with the evaluation kit.

#### `SupEvalKitUpdateEvalKitInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The evaluation kit description.

#### `SupEvalKitUpdateEvalKitInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The evaluation kit identifier.

#### `SupEvalKitUpdateEvalKitInput.newPreviewImages` · [`[SupEvalKitFileInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-file-input.md) list input supply

Replace the current evaluation kit preview images with these ones. The first image will be used as a best preview image.

#### `SupEvalKitUpdateEvalKitInput.publisherId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The publisher identifier.

#### `SupEvalKitUpdateEvalKitInput.removePartIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Remove list of Part identifiers associated with the evaluation kit.

#### `SupEvalKitUpdateEvalKitInput.removeRefDesignIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar common

Remove list of Reference Design identifiers associated with the evaluation kit.

#### `SupEvalKitUpdateEvalKitInput.sourceFile` · [`SupEvalKitFileInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-file-input.md) input supply

The evaluation kit source file for building source url.

#### `SupEvalKitUpdateEvalKitInput.sourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The evaluation kit source url.

#### `SupEvalKitUpdateEvalKitInput.title` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The evaluation kit title.

#### Deprecated

#### `SupEvalKitUpdateEvalKitInput.addCompatibleSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** list scalar common

> **Deprecated:** AddCompatibleSoftwareProjectIds is deprecated and no longer accepted.

Add list of Compatible Software Project identifiers associated with the evaluation kit.

#### `SupEvalKitUpdateEvalKitInput.removeCompatibleSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** list scalar common

> **Deprecated:** RemoveCompatibleSoftwareProjectIds is deprecated and no longer accepted.

Remove list of Compatible Software Project identifiers associated with the evaluation kit.
