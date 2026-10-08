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

- [BOM Issue](https://w3id.org/altium/cdm/procurement/BomIssue) — A problem found when a BOM is analysed, usually against a particular BOM line: for example an unknown part number, a duplicated designator, or a part that is deprecated, low in stock or not compliant with a standard such as REACH. The level at which each kind of check reports (Fatal Error, Error or Warning, or No Report to ignore it) is configurable, and an individual issue can be waived.
  - IRI: [`https://w3id.org/altium/cdm/procurement/BomIssue`](https://w3id.org/altium/cdm/procurement/BomIssue)

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

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Description of the issue (e.g., \*This part is RoHS Non-Compliant\*).

#### `healthCheck` · [`BomHealthCheck!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-health-check.md) non-null object

Health check definition.

#### `howToFix` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Recommended action to address the issue produced by the health check (e.g., \*Consider using a different Manufacturer Part Number\*).

#### `severity` · [`BomIssueSeverity!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/enums/bom-issue-severity.md) non-null enum

Severity of the issue.

#### `waived` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Designates that the issue is waived.

#### `waivingToken` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

A token whose value reflects the conditions that led to the issue. It changes if those conditions change significantly.

#### Deprecated

#### `healthcheckDefinitionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Use healthCheck.healthCheckId instead.

Health check definition ID.
