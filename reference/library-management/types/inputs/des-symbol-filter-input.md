---
title: "DesSymbolFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-symbol-filter-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesSymbolFilterInput

A component symbol. These represent the body and the pins on the physical component.

### Member Of

[`DesSymbolFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-symbol-filter-input.md) input

```graphql
input DesSymbolFilterInput {
  and: [DesSymbolFilterInput!]
  comment: StringOperationFilterInput
  description: StringOperationFilterInput
  name: StringOperationFilterInput
  or: [DesSymbolFilterInput!]
}
```

### Fields

#### `and` · [`[DesSymbolFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-symbol-filter-input.md) list input

#### `comment` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

ECAD entity comment.

#### `description` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

ECAD entity description.

#### `name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

ECAD entity name.

#### `or` · [`[DesSymbolFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-symbol-filter-input.md) list input
