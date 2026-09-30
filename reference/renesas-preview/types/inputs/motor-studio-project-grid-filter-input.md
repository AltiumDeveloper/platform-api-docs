---
title: "MotorStudioProjectGridFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/motor-studio-project-grid-filter-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: true
deprecated: false
---

# MotorStudioProjectGridFilterInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`MotorStudioProjectGridFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/motor-studio-project-grid-filter-input.md) input · [`RsaMotorStudioProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-project-filter-input.md) input

```graphql
input MotorStudioProjectGridFilterInput {
  and: [MotorStudioProjectGridFilterInput!]
  or: [MotorStudioProjectGridFilterInput!]
  projectId: StringOperationFilterInput
  tenantId: UuidOperationFilterInput
}
```

### Fields

#### `MotorStudioProjectGridFilterInput.and` · [`[MotorStudioProjectGridFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/motor-studio-project-grid-filter-input.md) list input renesas-preview

#### `MotorStudioProjectGridFilterInput.or` · [`[MotorStudioProjectGridFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/motor-studio-project-grid-filter-input.md) list input renesas-preview

#### `MotorStudioProjectGridFilterInput.projectId` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

#### `MotorStudioProjectGridFilterInput.tenantId` · [`UuidOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/uuid-operation-filter-input.md) input common
