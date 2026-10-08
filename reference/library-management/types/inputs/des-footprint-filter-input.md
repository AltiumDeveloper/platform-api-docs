---
title: "DesFootprintFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-footprint-filter-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesFootprintFilterInput

Provides filter options for a list of footprints.

### Member Of

[`DesFootprintFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-footprint-filter-input.md) input

```graphql
input DesFootprintFilterInput {
  and: [DesFootprintFilterInput!]
  comment: StringOperationFilterInput
  description: StringOperationFilterInput
  name: StringOperationFilterInput
  or: [DesFootprintFilterInput!]
}
```

### Fields

#### `and` · [`[DesFootprintFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-footprint-filter-input.md) list input

#### `comment` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

Filter by the ECAD entity comment.

#### `description` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

Filter by the ECAD entity description.

#### `name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

Filter by the ECAD entity name.

#### `or` · [`[DesFootprintFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-footprint-filter-input.md) list input
