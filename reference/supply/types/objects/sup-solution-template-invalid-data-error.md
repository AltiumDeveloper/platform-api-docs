---
title: "SupSolutionTemplateInvalidDataError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-invalid-data-error"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateInvalidDataError

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface common

### Implemented By

[`SupSolutionTemplatePatchKeyFeatureGroupsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-patch-key-feature-groups-error.md) union · [`SupSolutionTemplateSetKeyFeatureGroupsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-set-key-feature-groups-error.md) union

```graphql
type SupSolutionTemplateInvalidDataError implements Error {
  errorCode: SupSolutionTemplateErrorCode!
  message: String!
}
```

### Fields

#### `SupSolutionTemplateInvalidDataError.errorCode` · [`SupSolutionTemplateErrorCode!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-error-code.md) non-null enum supply

#### `SupSolutionTemplateInvalidDataError.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
