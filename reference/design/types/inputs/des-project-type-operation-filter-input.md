---
title: "DesProjectTypeOperationFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-type-operation-filter-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesProjectTypeOperationFilterInput

### Member Of

[`DesProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-filter-input.md) input

```graphql
input DesProjectTypeOperationFilterInput {
  eq: DesProjectType
  in: [DesProjectType!]
  neq: DesProjectType
  nin: [DesProjectType!]
}
```

### Fields

#### `eq` · [`DesProjectType`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-project-type.md) enum

#### `in` · [`[DesProjectType!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-project-type.md) list enum

#### `neq` · [`DesProjectType`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-project-type.md) enum

#### `nin` · [`[DesProjectType!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-project-type.md) list enum
