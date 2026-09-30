---
title: "DesPartGlobalAlternativesResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-alternatives-result"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartGlobalAlternativesResult

The result of a global part alternatives lookup, grouped by provider.

### Member Of

[`DesPartGlobalPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-part.md) object

```graphql
type DesPartGlobalAlternativesResult {
  siliconExpertParts: [DesPartGlobalAlternativeItem!]!
  supplyParts: [DesPartGlobalAlternativeItem!]!
  z2DataParts: [DesPartGlobalAlternativeItem!]!
}
```

### Fields

#### `DesPartGlobalAlternativesResult.siliconExpertParts` · [`[DesPartGlobalAlternativeItem!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-alternative-item.md) non-null object library-management

Alternatives provided by \*SiliconExpert\*.

#### `DesPartGlobalAlternativesResult.supplyParts` · [`[DesPartGlobalAlternativeItem!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-alternative-item.md) non-null object library-management

Alternatives provided by Altium.

#### `DesPartGlobalAlternativesResult.z2DataParts` · [`[DesPartGlobalAlternativeItem!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-alternative-item.md) non-null object library-management

Alternatives provided by \*Z2Data\*.
