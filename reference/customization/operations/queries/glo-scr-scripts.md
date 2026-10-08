---
title: "gloScrScripts"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/queries/glo-scr-scripts"
bounded_context: "Customization"
kind: "queries"
experimental: false
deprecated: false
---

# gloScrScripts

Retrieves a list of scripts with pagination options.

### Type

#### [`GloScrScriptConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-connection.md) object

A connection to a list of items.

```graphql
gloScrScripts(
  after: String
  before: String
  first: Int
  last: Int
  order: [GloScrScriptSortInput!]
): GloScrScriptConnection
```

### Arguments

#### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

#### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

#### `order` · [`[GloScrScriptSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-script-sort-input.md) list input
