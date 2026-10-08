---
title: "DateTimeOperationFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input"
bounded_context: "Common"
kind: "inputs"
experimental: false
deprecated: false
---

# DateTimeOperationFilterInput

### Member Of

[`DesProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-filter-input.md) input · [`DesReleaseFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-release-filter-input.md) input · [`DesWorkflowDefinitionFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-definition-filter-input.md) input · [`DesWorkflowFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-filter-input.md) input · [`GloAppFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-filter-input.md) input · [`GloCusAssignmentFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-assignment-filter-input.md) input · [`PlatformTokenFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-token-filter-input.md) input · [`RsaMotorStudioProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-project-filter-input.md) input

```graphql
input DateTimeOperationFilterInput {
  eq: DateTime
  gt: DateTime
  gte: DateTime
  in: [DateTime]
  lt: DateTime
  lte: DateTime
  neq: DateTime
  ngt: DateTime
  ngte: DateTime
  nin: [DateTime]
  nlt: DateTime
  nlte: DateTime
}
```

### Fields

#### `eq` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `gt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `gte` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `in` · [`[DateTime]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) list scalar

#### `lt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `lte` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `neq` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `ngt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `ngte` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `nin` · [`[DateTime]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) list scalar

#### `nlt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `nlte` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar
