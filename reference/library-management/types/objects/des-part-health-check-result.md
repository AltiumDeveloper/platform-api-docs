---
title: "DesPartHealthCheckResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-health-check-result"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartHealthCheckResult

Represents a health check result for a part.

### Member Of

[`DesPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part.md) object · [`DesPartGlobalPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-global-part.md) object

```graphql
type DesPartHealthCheckResult {
  description: String!
  healthCheckId: String!
  severity: String!
  shortDescription: String!
  source: String!
}
```

### Fields

#### `DesPartHealthCheckResult.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The detailed description of the health check result.

#### `DesPartHealthCheckResult.healthCheckId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the health check.

#### `DesPartHealthCheckResult.severity` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The severity level of the health check (e.g., \*Clean\*, \*Warning\*, \*Error\*, \*FatalError\*).

#### `DesPartHealthCheckResult.shortDescription` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The short description of the health check result.

#### `DesPartHealthCheckResult.source` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The source of the health check result (e.g., \*SupplyPart\*, \*CustomPart\*, \*SiliconExpertPart\*, \*Z2DataPart\*).
