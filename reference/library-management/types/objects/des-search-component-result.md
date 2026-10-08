---
title: "DesSearchComponentResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-search-component-result"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesSearchComponentResult

Represents the result of searching for a component by its manufacturer part number.

### Returned By

[`desSearchComponentsByMpns`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-search-components-by-mpns.md) query

```graphql
type DesSearchComponentResult {
  componentId: ID!
  itemId: String!
  itemName: String!
  revisionId: String!
  revisionName: String!
}
```

### Fields

#### `componentId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the component node.

#### `itemId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the item in the workspace.

#### `itemName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the item.

#### `revisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the latest revision of the component in the workspace.

#### `revisionName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the latest revision of the component.
