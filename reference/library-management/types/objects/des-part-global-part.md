---
title: "DesPartGlobalPart"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-part"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartGlobalPart

Represents global the part details.

### Returned By

[`desPartGlobalPartByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-global-part-by-ids.md) query

### Member Of

[`DesPartGlobalAlternativeItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-alternative-item.md) object · [`DesPartGlobalSearchItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-item.md) object

```graphql
type DesPartGlobalPart {
  alternatives: DesPartGlobalAlternativesResult
  globalPartId: String!
  healthCheckResults: [DesPartHealthCheckResult!]!
  siliconExpertPart: DesPartProviderPart
  supplyPart: DesPartProviderPart!
  z2DataPart: DesPartProviderPart
}
```

### Fields

#### `alternatives` · [`DesPartGlobalAlternativesResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-alternatives-result.md) object

The alternatives for this global part.

#### `globalPartId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the global part.

#### `healthCheckResults` · [`[DesPartHealthCheckResult!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-health-check-result.md) non-null object

The health check results for the part.

#### `siliconExpertPart` · [`DesPartProviderPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) object

The Silicon Expert part details.

#### `supplyPart` · [`DesPartProviderPart!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) non-null object

The search result part details.

#### `z2DataPart` · [`DesPartProviderPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) object

The Z2Data part details.
