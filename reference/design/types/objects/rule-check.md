---
title: "RuleCheck"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# RuleCheck

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents a rule check definition.

### Common Data Model

- [Rule Check](https://w3id.org/altium/cdm/design/RuleCheck) — Rule check definitions that can be executed against a project to validate design integrity and compliance with specified constraints.

  - IRI: [`https://w3id.org/altium/cdm/design/RuleCheck`](https://w3id.org/altium/cdm/design/RuleCheck)
  - GRID: `grid:workspace:{workspace-id}:design:rule-check/{id}`

### Returned By

[`design.preview.ruleCheckById`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-check-by-id.md) query · [`design.preview.ruleChecksByAuth`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-checks-by-auth.md) query · [`design.preview.ruleChecksByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/design/preview/rule-checks-by-ids.md) query · [`design.ruleCheck.byAuth`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check/by-auth.md) query · [`design.ruleCheck.byId`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check/by-id.md) query · [`design.ruleCheck.byIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check/by-ids.md) query

### Member Of

[`RuleCheckExecutionPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-part.md) object

```graphql
type RuleCheck {
  actualErrorReportLevel: String!
  defaultErrorReportLevel: String!
  description: String
  id: ID!
  name: String!
  type: String!
}
```

### Fields

#### `actualErrorReportLevel` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The error level at which this rule check was actually executed. Defaults to the rule check's default level when the actual level is not known (e.g. legacy records). Known values: NO\_REPORT, WARNING, ERROR, FATAL. New values may be added; clients must tolerate unknown values.

#### `defaultErrorReportLevel` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The default error level at which violations are reported. Known values: NO\_REPORT, WARNING, ERROR, FATAL. New values may be added; clients must tolerate unknown values.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The description of the rule check.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the rule check.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the rule check.

#### `type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The type of the rule check. Known values: ERC, DRC. New values may be added; clients must tolerate unknown values.
