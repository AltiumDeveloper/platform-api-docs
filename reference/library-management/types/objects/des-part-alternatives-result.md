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

#### `siliconExpertParts` · [`[DesPartAlternativeItem!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-alternative-item.md) non-null object

Alternatives provided by \*SiliconExpert\*.

#### `supplyParts` · [`[DesPartAlternativeItem!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-alternative-item.md) non-null object

Alternatives provided by Altium.

#### `z2DataParts` · [`[DesPartAlternativeItem!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-alternative-item.md) non-null object

Alternatives provided by \*Z2Data\*.
