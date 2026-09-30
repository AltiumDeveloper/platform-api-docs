---
title: "DesUpdateFootprintInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-footprint-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateFootprintInput

Input for updating a footprint.

### Member Of

[`desUpdateFootprint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-footprint.md) mutation

```graphql
input DesUpdateFootprintInput {
  comment: String
  description: String
  files: [DesUpdateFootprintFileInput!]
  footprintId: ID!
  releaseNote: String
}
```

### Fields

#### `DesUpdateFootprintInput.comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Optional comment.

#### `DesUpdateFootprintInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Optional description.

#### `DesUpdateFootprintInput.files` · [`[DesUpdateFootprintFileInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-footprint-file-input.md) list input library-management

Optional footprint files. If provided, these replace all existing release content.

#### `DesUpdateFootprintInput.footprintId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The footprint identifier.

#### `DesUpdateFootprintInput.releaseNote` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Optional release note.
