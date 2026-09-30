---
title: "DesPartAlternativeItem"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-alternative-item"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartAlternativeItem

An alternative part.

### Member Of

[`DesPartAlternativesResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-alternatives-result.md) object

```graphql
type DesPartAlternativeItem {
  part: DesPart!
  providerInfo: DesPartAlternativeProviderInfo!
}
```

### Fields

#### `DesPartAlternativeItem.part` · [`DesPart!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part.md) non-null object library-management

The alternative part.

#### `DesPartAlternativeItem.providerInfo` · [`DesPartAlternativeProviderInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-alternative-provider-info.md) non-null object library-management

Provider-specific metadata for this alternative within the enclosing bucket.
