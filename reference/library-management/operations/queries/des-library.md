---
title: "desLibrary"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-library"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desLibrary

Gets the library by workspace URL.

```graphql
desLibrary(
  args: DesLibraryArgsInput
  workspaceUrl: String
): DesLibrary!
```

### Arguments

#### `desLibrary.args` · [`DesLibraryArgsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-library-args-input.md) input library-management

#### `desLibrary.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The workspace URL.

### Type

#### [`DesLibrary`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-library.md) object library-management

Information about your library. All component data in A365 is stored in your library.
