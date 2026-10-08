---
title: "SupEvalKitCreateEvalKitInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-create-eval-kit-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitCreateEvalKitInput

Input for evaluation kit creation.

### Member Of

[`supEvalKitCreateEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-eval-kit-create-eval-kit.md) mutation

```graphql
input SupEvalKitCreateEvalKitInput {
  compatibleSoftwareProjectIds: [ID!] @deprecated
  description: String
  partIds: [String!]
  previewImages: [SupEvalKitFileInput!]!
  publisherId: String!
  refDesignIds: [ID!]
  sourceFile: SupEvalKitFileInput
  sourceUrl: String
  title: String!
}
```

### Fields

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The evaluation kit description.

#### `partIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

The list of Part identifiers associated with the evaluation kit.

#### `previewImages` · [`[SupEvalKitFileInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-file-input.md) non-null input

The list of evaluation kit images input. The first image will be the best preview image.

#### `publisherId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The publisher identifier.

#### `refDesignIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) list scalar

The list of Reference Design identifiers associated with the evaluation kit.

#### `sourceFile` · [`SupEvalKitFileInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-file-input.md) input

The evaluation kit source file for building source url.

#### `sourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The evaluation kit source url.

#### `title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The evaluation kit title.

#### Deprecated

#### `compatibleSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** list scalar

> **Deprecated:** CompatibleSoftwareProjectIds is deprecated and no longer accepted.

The list of Compatible Software Project identifiers associated with the evaluation kit.
