---
title: "DesUpdateSymbolInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-symbol-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateSymbolInput

Input for updating a symbol.

### Member Of

[`desUpdateSymbol`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-symbol.md) mutation

```graphql
input DesUpdateSymbolInput {
  comment: String
  description: String
  files: [DesUpdateSymbolFileInput!]
  releaseNote: String
  symbolId: ID!
}
```

### Fields

#### `comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Optional comment.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Optional description.

#### `files` · [`[DesUpdateSymbolFileInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-symbol-file-input.md) list input

Optional symbol files. If provided, these replace all existing release content.

#### `releaseNote` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Optional release note.

#### `symbolId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The symbol identifier.
