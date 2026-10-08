---
title: "BomOctopartPartReferenceInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-octopart-part-reference-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomOctopartPartReferenceInput

A reference to a part in Octopart.

### Member Of

[`BomCreateBomPartReferenceInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-part-reference-input.md) input

```graphql
input BomOctopartPartReferenceInput {
  partId: String!
}
```

### Fields

#### `partId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the part in Octopart.
