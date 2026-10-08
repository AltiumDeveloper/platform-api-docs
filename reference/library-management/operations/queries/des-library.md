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

### Type

#### [`DesLibrary`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-library.md) object

Information about your library. All component data in A365 is stored in your library.

```graphql
desLibrary(
  args: DesLibraryArgsInput
  workspaceUrl: String
): DesLibrary!
```

### Arguments

#### `args` · [`DesLibraryArgsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-library-args-input.md) input

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The workspace URL.
