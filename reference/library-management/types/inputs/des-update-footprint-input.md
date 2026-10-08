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

#### `comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Optional comment.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Optional description.

#### `files` · [`[DesUpdateFootprintFileInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-footprint-file-input.md) list input

Optional footprint files. If provided, these replace all existing release content.

#### `footprintId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The footprint identifier.

#### `releaseNote` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Optional release note.
