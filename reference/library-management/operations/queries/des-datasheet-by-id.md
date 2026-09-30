---
title: "desDatasheetById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-datasheet-by-id"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desDatasheetById

Search a specific datasheet by its unique identifier.

```graphql
desDatasheetById(
  id: ID!
): DesDatasheet
```

### Arguments

#### `desDatasheetById.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier for a datasheet.

### Type

#### [`DesDatasheet`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet.md) object library-management

A component datasheet.
