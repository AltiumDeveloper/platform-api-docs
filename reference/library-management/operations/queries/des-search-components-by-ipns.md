---
title: "desSearchComponentsByIpns"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-search-components-by-ipns"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desSearchComponentsByIpns

Gets components by internal part numbers.

```graphql
desSearchComponentsByIpns(
  ipns: [String!]!
): [DesComponent]!
```

### Arguments

#### `desSearchComponentsByIpns.ipns` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Internal part numbers.

### Type

#### [`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object library-management

A component contains the parametric details of a PCB part.
