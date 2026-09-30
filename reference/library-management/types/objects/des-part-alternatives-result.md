---
title: "DesPartAlternativesResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-alternatives-result"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartAlternativesResult

The result of a part alternatives lookup, grouped by provider.

### Member Of

[`DesPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part.md) object

```graphql
type DesPartAlternativesResult {
  siliconExpertParts: [DesPartAlternativeItem!]!
  supplyParts: [DesPartAlternativeItem!]!
  z2DataParts: [DesPartAlternativeItem!]!
}
```

### Fields

#### `DesPartAlternativesResult.siliconExpertParts` · [`[DesPartAlternativeItem!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-alternative-item.md) non-null object library-management

Alternatives provided by \*SiliconExpert\*.

#### `DesPartAlternativesResult.supplyParts` · [`[DesPartAlternativeItem!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-alternative-item.md) non-null object library-management

Alternatives provided by Altium.

#### `DesPartAlternativesResult.z2DataParts` · [`[DesPartAlternativeItem!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-alternative-item.md) non-null object library-management

Alternatives provided by \*Z2Data\*.
