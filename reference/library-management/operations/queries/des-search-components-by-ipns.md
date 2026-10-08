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

### Type

#### [`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object

A component contains the parametric details of a PCB part.

```graphql
desSearchComponentsByIpns(
  ipns: [String!]!
): [DesComponent]!
```

### Arguments

#### `ipns` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Internal part numbers.
