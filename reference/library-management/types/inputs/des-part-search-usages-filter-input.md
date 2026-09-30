---
title: "DesPartSearchUsagesFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-usages-filter-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartSearchUsagesFilterInput

Represents the filter for searching by usages.

### Member Of

[`DesPartSearchFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-search-filter-input.md) input

```graphql
input DesPartSearchUsagesFilterInput {
  id: ID!
  variantId: String
}
```

### Fields

#### `DesPartSearchUsagesFilterInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the usage.

#### `DesPartSearchUsagesFilterInput.variantId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The variant identifier of the project. This is ignored for non-project resources.
