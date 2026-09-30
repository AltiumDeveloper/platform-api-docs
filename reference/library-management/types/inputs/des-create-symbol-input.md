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

#### `DesCreateSymbolInput.files` · [`[DesCreateSymbolFileInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-create-symbol-file-input.md) non-null input library-management

The symbol files.

#### `DesCreateSymbolInput.folderId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The destination folder identifier.

#### `DesCreateSymbolInput.lifeCycleDefinitionId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

The symbol life cycle definition identifier.

#### `DesCreateSymbolInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The symbol name. Use null to be generated, provided that the destination folder defines an item naming scheme.

#### `DesCreateSymbolInput.revisionNamingSchemeId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common

The symbol revision naming scheme identifier.

#### `DesCreateSymbolInput.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The workspace URL.
