---
title: "SupSolutionTemplateApplicationNotFoundError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application-not-found-error"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateApplicationNotFoundError

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface common

### Implemented By

[`SupSolutionTemplateDeleteSolutionTemplateApplicationError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-delete-solution-template-application-error.md) union · [`SupSolutionTemplateUpdateSolutionTemplateApplicationError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-update-solution-template-application-error.md) union

```graphql
type SupSolutionTemplateApplicationNotFoundError implements Error {
  errorCode: SupSolutionTemplateErrorCode!
  message: String!
}
```

### Fields

#### `SupSolutionTemplateApplicationNotFoundError.errorCode` · [`SupSolutionTemplateErrorCode!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-error-code.md) non-null enum supply

#### `SupSolutionTemplateApplicationNotFoundError.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
