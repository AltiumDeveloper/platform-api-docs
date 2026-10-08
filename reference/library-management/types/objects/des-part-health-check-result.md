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

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The detailed description of the health check result.

#### `healthCheckId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the health check.

#### `severity` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The severity level of the health check (e.g., \*Clean\*, \*Warning\*, \*Error\*, \*FatalError\*).

#### `shortDescription` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The short description of the health check result.

#### `source` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The source of the health check result (e.g., \*SupplyPart\*, \*CustomPart\*, \*SiliconExpertPart\*, \*Z2DataPart\*).
