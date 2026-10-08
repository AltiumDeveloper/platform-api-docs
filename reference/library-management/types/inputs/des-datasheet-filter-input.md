---
title: "DesDatasheetFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-datasheet-filter-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesDatasheetFilterInput

A component datasheet.

### Member Of

[`DesDatasheetFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-datasheet-filter-input.md) input

```graphql
input DesDatasheetFilterInput {
  and: [DesDatasheetFilterInput!]
  comment: StringOperationFilterInput
  description: StringOperationFilterInput
  name: StringOperationFilterInput
  or: [DesDatasheetFilterInput!]
}
```

### Fields

#### `and` · [`[DesDatasheetFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-datasheet-filter-input.md) list input

#### `comment` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

ECAD entity comment.

#### `description` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

ECAD entity description.

#### `name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

ECAD entity name.

#### `or` · [`[DesDatasheetFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-datasheet-filter-input.md) list input
