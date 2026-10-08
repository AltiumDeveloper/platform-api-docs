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

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the usage.

#### `variantId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The variant identifier of the project. This is ignored for non-project resources.
