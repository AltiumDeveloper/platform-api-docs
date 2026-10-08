---
title: "DesPartSearchInferenceStrippedSpan"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-inference-stripped-span"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartSearchInferenceStrippedSpan

Represents a term stripped from the original query during inference.

### Member Of

[`DesPartSearchInferenceResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-inference-result.md) object

```graphql
type DesPartSearchInferenceStrippedSpan {
  attributeShortnames: [String!]!
  end: Int!
  start: Int!
  text: String!
}
```

### Fields

#### `attributeShortnames` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Attribute short names corresponding to the stripped term.

#### `end` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The exclusive end character index of the stripped term.

#### `start` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The start character index of the stripped term.

#### `text` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The stripped term text.
