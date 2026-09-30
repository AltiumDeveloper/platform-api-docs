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

#### `DesPartGlobalPart.alternatives` · [`DesPartGlobalAlternativesResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-alternatives-result.md) object library-management

The alternatives for this global part.

#### `DesPartGlobalPart.globalPartId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the global part.

#### `DesPartGlobalPart.healthCheckResults` · [`[DesPartHealthCheckResult!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-health-check-result.md) non-null object library-management

The health check results for the part.

#### `DesPartGlobalPart.siliconExpertPart` · [`DesPartProviderPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) object library-management

The Silicon Expert part details.

#### `DesPartGlobalPart.supplyPart` · [`DesPartProviderPart!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) non-null object library-management

The search result part details.

#### `DesPartGlobalPart.z2DataPart` · [`DesPartProviderPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) object library-management

The Z2Data part details.
