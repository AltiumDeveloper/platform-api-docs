---
title: "BomIssue"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-issue"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomIssue

Issue details.

### Common Data Model

- [BOM Issue](https://altiumdeveloper.github.io/cdm/classes/pro_BomIssue/)

### Member Of

[`Bom`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom.md) interface · [`BomItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item.md) object · [`BomItemAlternate`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-alternate.md) object · [`BomItemElement`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element.md) interface · [`BomItemSubstitute`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-substitute.md) object · [`BomRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release.md) object · [`BomWip`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) object

```graphql
type BomIssue {
  description: String!
  healthCheck: BomHealthCheck!
  healthcheckDefinitionId: String! @deprecated
  howToFix: String
  severity: BomIssueSeverity!
  waived: Boolean!
  waivingToken: String
}
```

### Fields

#### `BomIssue.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Description of the issue (e.g., \*This part is RoHS Non-Compliant\*).

#### `BomIssue.healthCheck` · [`BomHealthCheck!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-health-check.md) non-null object procurement

Health check definition.

#### `BomIssue.howToFix` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Recommended action to address the issue produced by the health check (e.g., \*Consider using a different Manufacturer Part Number\*).

#### `BomIssue.severity` · [`BomIssueSeverity!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/enums/bom-issue-severity.md) non-null enum procurement

Severity of the issue.

#### `BomIssue.waived` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Designates that the issue is waived.

#### `BomIssue.waivingToken` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

A token whose value reflects the conditions that led to the issue. It changes if those conditions change significantly.

#### Deprecated

#### `BomIssue.healthcheckDefinitionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Use healthCheck.healthCheckId instead.

Health check definition ID.
