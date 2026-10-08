---
title: "gloScrScriptExecutionResults"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/queries/glo-scr-script-execution-results"
bounded_context: "Customization"
kind: "queries"
experimental: false
deprecated: false
---

# gloScrScriptExecutionResults

Retrieves the execution results of a script by its script ID and version ID.

### Type

#### [`GloScrScriptExecutionConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution-connection.md) object

A connection to a list of items.

```graphql
gloScrScriptExecutionResults(
  after: String
  before: String
  first: Int
  last: Int
  order: [GloScrScriptExecutionSortInput!]
  scriptId: String!
  versionId: String
): GloScrScriptExecutionConnection
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

#### `order` · [`[GloScrScriptExecutionSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-scr-script-execution-sort-input.md) list input

#### `scriptId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `versionId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar
