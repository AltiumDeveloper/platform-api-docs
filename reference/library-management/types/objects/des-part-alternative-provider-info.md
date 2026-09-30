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

#### `DesPartAlternativeProviderInfo.comments` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Provider comments about the alternative.

#### `DesPartAlternativeProviderInfo.compatibilityRating` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar common

The compatibility rating (0-1).

#### `DesPartAlternativeProviderInfo.crossType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The cross type.

#### `DesPartAlternativeProviderInfo.crossTypeShort` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The abbreviated cross type.
