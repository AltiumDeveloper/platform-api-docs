---
title: "DesSchematicFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-schematic-filter-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesSchematicFilterInput

A schematic contains the design parts and logical connections.

### Member Of

[`DesSchematicFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-schematic-filter-input.md) input

```graphql
input DesSchematicFilterInput {
  and: [DesSchematicFilterInput!]
  documentId: StringOperationFilterInput
  documentName: StringOperationFilterInput
  or: [DesSchematicFilterInput!]
}
```

### Fields

#### `and` · [`[DesSchematicFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-schematic-filter-input.md) list input

#### `documentId` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The reference identifier for this schematic.

#### `documentName` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The document file name.

#### `or` · [`[DesSchematicFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-schematic-filter-input.md) list input
