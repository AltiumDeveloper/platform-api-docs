---
title: "DesPart"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPart

Represents a part.

### Common Data Model

- [Part](https://altiumdeveloper.github.io/cdm/classes/lib_Part/)
  - GRID: `grid:workspace:{workspace-id}:library:part/{id}`

### Returned By

[`desPartById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-by-id.md) query · [`desPartByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-by-ids.md) query

### Member Of

[`DesPartAlternativeItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-alternative-item.md) object · [`DesPartGlobalSearchItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-search-item.md) object · [`DesPartSearchByManufacturerPartIdsResultItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-by-manufacturer-part-ids-result-item.md) object · [`DesPartSearchConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-connection.md) object · [`DesPartSearchEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-search-edge.md) object

```graphql
type DesPart {
  alternatives: DesPartAlternativesResult
  customPart: DesPartProviderPart
  description: String!
  healthChecks: [DesPartHealthCheckResult!]!
  id: ID!
  imageUrl: URL
  lifecycle: DesPartLifecycle
  localSupplyPart: DesPartProviderPart
  manufacturerName: String!
  mpn: String!
  siliconExpertPart: DesPartProviderPart
  supplyPart: DesPartSupplyPart
  tags: [DesPartTag!]!
  usages: DesPartUsages
  z2DataPart: DesPartProviderPart
}
```

### Fields

#### `DesPart.alternatives` · [`DesPartAlternativesResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-alternatives-result.md) object library-management

The alternatives for this part.

#### `DesPart.customPart` · [`DesPartProviderPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) object library-management

The custom part details.

#### `DesPart.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A description of the part.

#### `DesPart.healthChecks` · [`[DesPartHealthCheckResult!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-health-check-result.md) non-null object library-management

The health check results for the part.

#### `DesPart.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The identifier of the part.

#### `DesPart.imageUrl` · [`URL`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/url.md) scalar common

The URL for the part image.

#### `DesPart.lifecycle` · [`DesPartLifecycle`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-lifecycle.md) object library-management

The lifecycle of the part. `null` when the part has no vault item yet.

#### `DesPart.localSupplyPart` · [`DesPartProviderPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) object library-management

The cached subset of `supplyPart`.

#### `DesPart.manufacturerName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The manufacturer name of the part.

#### `DesPart.mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The manufacturer part number of the part.

#### `DesPart.siliconExpertPart` · [`DesPartProviderPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) object library-management

The \*SiliconExpert\* part details.

#### `DesPart.supplyPart` · [`DesPartSupplyPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-supply-part.md) object library-management

The supply part details.

#### `DesPart.tags` · [`[DesPartTag!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-tag.md) non-null object library-management

The tags assigned to the part. Empty when the part has no vault item yet.

#### `DesPart.usages` · [`DesPartUsages`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-usages.md) object library-management

The usage information for the part.

#### `DesPart.z2DataPart` · [`DesPartProviderPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) object library-management

The \*Z2Data\* part details.
