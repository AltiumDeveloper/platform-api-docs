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

#### `DesUpdateSymbolInput.comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Optional comment.

#### `DesUpdateSymbolInput.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Optional description.

#### `DesUpdateSymbolInput.files` · [`[DesUpdateSymbolFileInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-symbol-file-input.md) list input library-management

Optional symbol files. If provided, these replace all existing release content.

#### `DesUpdateSymbolInput.releaseNote` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Optional release note.

#### `DesUpdateSymbolInput.symbolId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The symbol identifier.
