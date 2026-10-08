---
title: "DesPartGlobalAlternativeItem"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-alternative-item"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartGlobalAlternativeItem

An alternative global part.

### Member Of

[`DesPartGlobalAlternativesResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-alternatives-result.md) object

```graphql
type DesPartGlobalAlternativeItem {
  part: DesPartGlobalPart!
  providerInfo: DesPartAlternativeProviderInfo!
}
```

### Fields

#### `part` · [`DesPartGlobalPart!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-part.md) non-null object

The alternative global part.

#### `providerInfo` · [`DesPartAlternativeProviderInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-alternative-provider-info.md) non-null object

Provider-specific metadata for this alternative within the enclosing bucket.
