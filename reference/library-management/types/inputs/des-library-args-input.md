---
title: "DesLibraryArgsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-library-args-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesLibraryArgsInput

[`desLibrary`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-library.md) extra arguments.

### Member Of

[`desLibrary`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-library.md) query

```graphql
input DesLibraryArgsInput {
  allComponentRevisions: Boolean
}
```

### Fields

#### `allComponentRevisions` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Fetch all component revisions when listing components. When set to false, only the latest component revisions are returned. Defaults to false.
