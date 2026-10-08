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

#### `assignments` · [`GloCusAssignmentConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-assignment-connection.md) object

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `order` · [`[GloCusAssignmentSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-assignment-sort-input.md) list input

##### `where` · [`GloCusAssignmentFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-assignment-filter-input.md) input

#### `configurationParameters` · [`[GloCusExtensionPointParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-extension-point-parameter.md) non-null object

Declared extension point configuration parameters.

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `entityType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `executionContext` · [`GloCusExecutionContext!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-execution-context.md) non-null enum

#### `extensionPointId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `inputParameters` · [`[GloCusExtensionPointParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-extension-point-parameter.md) non-null object

Declared extension point input parameters.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `outputParameters` · [`[GloCusExtensionPointParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-extension-point-parameter.md) non-null object

Declared extension point output parameters.

#### `scriptDescription` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `scriptName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `scriptText` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `supportedAssignmentTypes` · [`[GloCusAssignmentType!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/enums/glo-cus-assignment-type.md) non-null enum

Allow-list of assignment types this extension point accepts.

#### `type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
