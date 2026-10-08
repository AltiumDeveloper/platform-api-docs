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

- [Part](https://w3id.org/altium/cdm/library/Part) — A manufacturer part, identified by manufacturer and part number, as held in the Workspace's Part Catalog together with the supplier parts through which it is sold. Workspace components reference manufacturer parts through their Part Choices.

  - IRI: [`https://w3id.org/altium/cdm/library/Part`](https://w3id.org/altium/cdm/library/Part)
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

#### `alternatives` · [`DesPartAlternativesResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-alternatives-result.md) object

The alternatives for this part.

#### `customPart` · [`DesPartProviderPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) object

The custom part details.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A description of the part.

#### `healthChecks` · [`[DesPartHealthCheckResult!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-health-check-result.md) non-null object

The health check results for the part.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier of the part.

#### `imageUrl` · [`URL`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/url.md) scalar

The URL for the part image.

#### `lifecycle` · [`DesPartLifecycle`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-lifecycle.md) object

The lifecycle of the part. `null` when the part has no vault item yet.

#### `localSupplyPart` · [`DesPartProviderPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) object

The cached subset of `supplyPart`.

#### `manufacturerName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The manufacturer name of the part.

#### `mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The manufacturer part number of the part.

#### `siliconExpertPart` · [`DesPartProviderPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) object

The \*SiliconExpert\* part details.

#### `supplyPart` · [`DesPartSupplyPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-supply-part.md) object

The supply part details.

#### `tags` · [`[DesPartTag!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-tag.md) non-null object

The tags assigned to the part. Empty when the part has no vault item yet.

#### `usages` · [`DesPartUsages`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-usages.md) object

The usage information for the part.

#### `z2DataPart` · [`DesPartProviderPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-provider-part.md) object

The \*Z2Data\* part details.
