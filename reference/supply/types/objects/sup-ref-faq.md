---
title: "SupRefFaq"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-faq"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefFaq

Represents a frequently asked question for a reference design.

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) object

```graphql
type SupRefFaq {
  answer: String!
  question: String!
}
```

### Fields

#### `answer` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The answer text.

#### `question` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The question text.
