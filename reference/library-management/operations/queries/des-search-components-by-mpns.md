---
title: "desSearchComponentsByMpns"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-search-components-by-mpns"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desSearchComponentsByMpns

\*PROTOTYPE, SUBJECT TO CHANGE\*. Searches for components where one of the provided MPNs matches a part choice.

```graphql
desSearchComponentsByMpns(
  input: [DesSearchComponentByMpnInput!]!
): [DesSearchComponentResult!]!
```

### Arguments

#### `desSearchComponentsByMpns.input` · [`[DesSearchComponentByMpnInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-search-component-by-mpn-input.md) non-null input library-management

The manufacturer part numbers to search by.

### Type

#### [`DesSearchComponentResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-search-component-result.md) object library-management

Represents the result of searching for a component by its manufacturer part number.
