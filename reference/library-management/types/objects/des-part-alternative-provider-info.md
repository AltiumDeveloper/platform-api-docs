---
title: "DesPartAlternativeProviderInfo"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-alternative-provider-info"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartAlternativeProviderInfo

Provider-specific information about a part alternative.

### Member Of

[`DesPartAlternativeItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-alternative-item.md) object · [`DesPartGlobalAlternativeItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-alternative-item.md) object

```graphql
type DesPartAlternativeProviderInfo {
  comments: String
  compatibilityRating: Float
  crossType: String
  crossTypeShort: String
}
```

### Fields

#### `comments` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Provider comments about the alternative.

#### `compatibilityRating` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar

The compatibility rating (0-1).

#### `crossType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The cross type.

#### `crossTypeShort` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The abbreviated cross type.
