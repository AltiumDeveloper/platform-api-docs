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

#### `gloScrScripts.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

#### `gloScrScripts.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

#### `gloScrScripts.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

#### `gloScrScripts.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

#### `gloScrScripts.order` · [`[GloScrScriptSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-script-sort-input.md) list input customization

### Type

#### [`GloScrScriptConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-connection.md) object customization

A connection to a list of items.
