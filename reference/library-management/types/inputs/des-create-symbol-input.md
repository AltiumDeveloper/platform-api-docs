---
title: "DesCreateSymbolInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-create-symbol-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCreateSymbolInput

Input for creating a symbol.

### Member Of

[`desCreateSymbol`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-create-symbol.md) mutation

```graphql
input DesCreateSymbolInput {
  files: [DesCreateSymbolFileInput!]!
  folderId: ID!
  lifeCycleDefinitionId: ID
  name: String
  revisionNamingSchemeId: ID
  workspaceUrl: String
}
```

### Fields

#### `files` · [`[DesCreateSymbolFileInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-create-symbol-file-input.md) non-null input

The symbol files.

#### `folderId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The destination folder identifier.

#### `lifeCycleDefinitionId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The symbol life cycle definition identifier.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The symbol name. Use null to be generated, provided that the destination folder defines an item naming scheme.

#### `revisionNamingSchemeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The symbol revision naming scheme identifier.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The workspace URL.
