---
title: "DesPartCategory"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-category"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartCategory

Represents a part category.

### Member Of

[`DesPartCategoriesByProviders`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-categories-by-providers.md) object · [`DesPartProviderPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) object · [`DesPartSearchInferenceCategorySuggestion`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-inference-category-suggestion.md) object · [`DesPartSearchInferenceResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-inference-result.md) object

```graphql
type DesPartCategory {
  categoryId: String!
  name: String!
  parentCategoryId: String!
  path: String!
  relevantAttributes: [DesPartAttribute!]!
}
```

### Fields

#### `categoryId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the category.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the category.

#### `parentCategoryId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the parent category.

#### `path` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The path of the category.

#### `relevantAttributes` · [`[DesPartAttribute!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attribute.md) non-null object

The attributes relevant to the category.
