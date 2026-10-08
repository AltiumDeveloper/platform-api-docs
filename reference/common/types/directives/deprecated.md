---
title: "deprecated"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/directives/deprecated"
bounded_context: "Common"
kind: "directives"
experimental: false
deprecated: false
---

# deprecated

Marks an element of a GraphQL schema as no longer supported.

```graphql
directive @deprecated(
  reason: String = "No longer supported"
) on 
  | FIELD_DEFINITION
  | ARGUMENT_DEFINITION
  | INPUT_FIELD_DEFINITION
  | ENUM_VALUE
```

### Arguments

#### `reason` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).
