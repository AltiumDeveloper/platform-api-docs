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

#### `addPartIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Add list of Part identifiers associated with the evaluation kit.

#### `addRefDesignIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar

Add list of Reference Design identifiers associated with the evaluation kit.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The evaluation kit description.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The evaluation kit identifier.

#### `newPreviewImages` · [`[SupEvalKitFileInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-file-input.md) list input

Replace the current evaluation kit preview images with these ones. The first image will be used as a best preview image.

#### `publisherId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The publisher identifier.

#### `removePartIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Remove list of Part identifiers associated with the evaluation kit.

#### `removeRefDesignIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar

Remove list of Reference Design identifiers associated with the evaluation kit.

#### `sourceFile` · [`SupEvalKitFileInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-file-input.md) input

The evaluation kit source file for building source url.

#### `sourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The evaluation kit source url.

#### `title` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The evaluation kit title.

#### Deprecated

#### `addCompatibleSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** list scalar

> **Deprecated:** AddCompatibleSoftwareProjectIds is deprecated and no longer accepted.

Add list of Compatible Software Project identifiers associated with the evaluation kit.

#### `removeCompatibleSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** list scalar

> **Deprecated:** RemoveCompatibleSoftwareProjectIds is deprecated and no longer accepted.

Remove list of Compatible Software Project identifiers associated with the evaluation kit.
