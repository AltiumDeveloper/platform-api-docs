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

### Type

#### [`DesDatasheet`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet.md) object

A component datasheet.

```graphql
desDatasheetById(
  id: ID!
): DesDatasheet
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier for a datasheet.
