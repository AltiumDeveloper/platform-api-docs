---
title: "GloCusAssignmentFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-assignment-filter-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCusAssignmentFilterInput

### Member Of

[`GloCusAssignmentFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-assignment-filter-input.md) input

```graphql
input GloCusAssignmentFilterInput {
  active: GloCusBooleanOperationFilterInput
  and: [GloCusAssignmentFilterInput!]
  assignmentId: GloCusStringTypeFilterInput
  createdAt: DateTimeOperationFilterInput
  createdBy: GloCusStringTypeFilterInput
  lastModifiedAt: DateTimeOperationFilterInput
  lastModifiedBy: GloCusStringTypeFilterInput
  name: GloCusStringTypeFilterInput
  or: [GloCusAssignmentFilterInput!]
  type: GloCusAssignmentTypeOperationFilterInput
}
```

### Fields

#### `active` · [`GloCusBooleanOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-boolean-operation-filter-input.md) input

#### `and` · [`[GloCusAssignmentFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-assignment-filter-input.md) list input

#### `assignmentId` · [`GloCusStringTypeFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-string-type-filter-input.md) input

#### `createdAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input

#### `createdBy` · [`GloCusStringTypeFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-string-type-filter-input.md) input

#### `lastModifiedAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input

#### `lastModifiedBy` · [`GloCusStringTypeFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-string-type-filter-input.md) input

#### `name` · [`GloCusStringTypeFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-string-type-filter-input.md) input

#### `or` · [`[GloCusAssignmentFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-assignment-filter-input.md) list input

#### `type` · [`GloCusAssignmentTypeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-assignment-type-operation-filter-input.md) input
