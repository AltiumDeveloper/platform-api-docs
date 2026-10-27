---
title: "BomHealthCheck"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-health-check"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomHealthCheck

Health check description.

### Member Of

[`Bom`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom.md) interface · [`BomIssue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-issue.md) object · [`BomRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release.md) object · [`BomWip`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) object

```graphql
type BomHealthCheck {
  category: BomHealthCheckCategory!
  description: String!
  group: String
  healthCheckId: String!
  howToFix: String
  label: String!
  provider: BomHealthCheckProvider!
  severity: BomHealthCheckSeverity!
}
```

### Fields

#### `category` · [`BomHealthCheckCategory!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-health-check-category.md) non-null object

Category the health check belongs to (e.g., \*Supply Chain\*, \*Manufacturer Lifecycles\*).

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Description of the health check (e.g., \*This part is RoHS Non-Compliant\*).

#### `group` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

If set, designates the name of a group the health check belongs to. E.g., the group might be named \*RoHS status\*, and the descriptions of the health checks in the group might be \*No\*, \*Yes with Exemption\*, and \*Unknown\*.

#### `healthCheckId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Health check ID.

#### `howToFix` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Recommended action to address the issue produced by the health check (e.g., \*Consider using a different Manufacturer Part Number\*).

#### `label` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A concise label or tag for the health check. (e.g., \*RoHS Non-Compliant\*).

#### `provider` · [`BomHealthCheckProvider!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-health-check-provider.md) non-null object

Provider of the health check.

#### `severity` · [`BomHealthCheckSeverity!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/enums/bom-health-check-severity.md) non-null enum

Severity of the health check.
