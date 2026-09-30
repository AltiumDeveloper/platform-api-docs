---
title: "SupSolutionTemplateApplicationIsExistedError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application-is-existed-error"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateApplicationIsExistedError

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface common

### Implemented By

[`SupSolutionTemplateCreateSolutionTemplateApplicationError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-create-solution-template-application-error.md) union

```graphql
type SupSolutionTemplateApplicationIsExistedError implements Error {
  errorCode: SupSolutionTemplateErrorCode!
  message: String!
}
```

### Fields

#### `SupSolutionTemplateApplicationIsExistedError.errorCode` · [`SupSolutionTemplateErrorCode!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-error-code.md) non-null enum supply

#### `SupSolutionTemplateApplicationIsExistedError.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
