---
title: "GridFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/grid-filter-input"
bounded_context: "Common"
kind: "inputs"
experimental: true
deprecated: false
---

# GridFilterInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`DesWorkspaceUserFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-workspace-user-filter-input.md) input · [`GridFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/grid-filter-input.md) input · [`RsaMotorStudioProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-project-filter-input.md) input

```graphql
input GridFilterInput {
  and: [GridFilterInput!]
  hasTenant: BooleanOperationFilterInput
  isInvalid: BooleanOperationFilterInput
  isWellFormed: BooleanOperationFilterInput
  or: [GridFilterInput!]
  resourcePath: PathFilterInput
  value: StringOperationFilterInput
}
```

### Fields

#### `GridFilterInput.and` · [`[GridFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/grid-filter-input.md) list input common

#### `GridFilterInput.hasTenant` · [`BooleanOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/boolean-operation-filter-input.md) input common

#### `GridFilterInput.isInvalid` · [`BooleanOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/boolean-operation-filter-input.md) input common

#### `GridFilterInput.isWellFormed` · [`BooleanOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/boolean-operation-filter-input.md) input common

#### `GridFilterInput.or` · [`[GridFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/grid-filter-input.md) list input common

#### `GridFilterInput.resourcePath` · [`PathFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/path-filter-input.md) input common

#### `GridFilterInput.value` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common
