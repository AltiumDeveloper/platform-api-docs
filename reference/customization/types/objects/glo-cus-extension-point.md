---
title: "GloCusExtensionPoint"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-extension-point"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloCusExtensionPoint

### Returned By

[`gloCusExtensionPoints`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/queries/glo-cus-extension-points.md) query

```graphql
type GloCusExtensionPoint {
  assignments(
    after: String
    before: String
    first: Int
    last: Int
    order: [GloCusAssignmentSortInput!]
    where: GloCusAssignmentFilterInput
  ): GloCusAssignmentConnection
  configurationParameters: [GloCusExtensionPointParameter!]!
  description: String
  entityType: String!
  executionContext: GloCusExecutionContext!
  extensionPointId: String!
  inputParameters: [GloCusExtensionPointParameter!]!
  name: String!
  outputParameters: [GloCusExtensionPointParameter!]!
  scriptDescription: String
  scriptName: String!
  scriptText: String!
  supportedAssignmentTypes: [GloCusAssignmentType!]!
  type: String!
}
```

### Fields

#### `GloCusExtensionPoint.assignments` · [`GloCusAssignmentConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-assignment-connection.md) object customization

##### `GloCusExtensionPoint.assignments.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `GloCusExtensionPoint.assignments.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `GloCusExtensionPoint.assignments.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `GloCusExtensionPoint.assignments.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

##### `GloCusExtensionPoint.assignments.order` · [`[GloCusAssignmentSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-assignment-sort-input.md) list input customization

##### `GloCusExtensionPoint.assignments.where` · [`GloCusAssignmentFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-assignment-filter-input.md) input customization

#### `GloCusExtensionPoint.configurationParameters` · [`[GloCusExtensionPointParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-extension-point-parameter.md) non-null object customization

Declared extension point configuration parameters.

#### `GloCusExtensionPoint.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `GloCusExtensionPoint.entityType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloCusExtensionPoint.executionContext` · [`GloCusExecutionContext!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-execution-context.md) non-null enum customization

#### `GloCusExtensionPoint.extensionPointId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloCusExtensionPoint.inputParameters` · [`[GloCusExtensionPointParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-extension-point-parameter.md) non-null object customization

Declared extension point input parameters.

#### `GloCusExtensionPoint.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloCusExtensionPoint.outputParameters` · [`[GloCusExtensionPointParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-extension-point-parameter.md) non-null object customization

Declared extension point output parameters.

#### `GloCusExtensionPoint.scriptDescription` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `GloCusExtensionPoint.scriptName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloCusExtensionPoint.scriptText` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `GloCusExtensionPoint.supportedAssignmentTypes` · [`[GloCusAssignmentType!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-assignment-type.md) non-null enum customization

Allow-list of assignment types this extension point accepts.

#### `GloCusExtensionPoint.type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
