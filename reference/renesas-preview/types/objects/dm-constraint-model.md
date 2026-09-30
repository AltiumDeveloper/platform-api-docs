---
title: "DmConstraintModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-constraint-model"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmConstraintModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Snapshot of the CP-SAT constraint model built before the solver runs, including variables, constraint groups, and the objective.

### Member Of

[`DmResolverFeasibilityResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-resolver-feasibility-result.md) object · [`DmResolverResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-resolver-result.md) object

```graphql
type DmConstraintModel {
  constraints: [String!]!
  display: String!
  objective: String!
  variables: [String!]!
}
```

### Fields

#### `DmConstraintModel.constraints` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

List of individual constraints with their group name, index, and description.

#### `DmConstraintModel.display` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Structured, human-readable representation of the full constraint model.

#### `DmConstraintModel.objective` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `DmConstraintModel.variables` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

List of individual decision variables with their group name, optional sub-label, and variable name.
