---
title: "SupSolutionTemplateErrorCode"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-error-code"
bounded_context: "Supply"
kind: "enums"
experimental: false
deprecated: false
---

# SupSolutionTemplateErrorCode

### Member Of

[`SupSolutionTemplateApplicationIsExistedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application-is-existed-error.md) object · [`SupSolutionTemplateApplicationNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application-not-found-error.md) object · [`SupSolutionTemplateInvalidDataError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-invalid-data-error.md) object · [`SupSolutionTemplateNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-not-found-error.md) object · [`SupSolutionTemplateOperationFailedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-operation-failed-error.md) object

```graphql
enum SupSolutionTemplateErrorCode {
  INVALID_DATA_INPUT
  OPERATION_FAILED
  SUP_SOLUTION_TEMPLATE_APPLICATION_IS_EXISTED
  SUP_SOLUTION_TEMPLATE_APPLICATION_NOT_FOUND
  SUP_SOLUTION_TEMPLATE_ITEM_CONFLICT
  SUP_SOLUTION_TEMPLATE_NOT_FOUND
  SUP_SOLUTION_TEMPLATE_STABLE_NAME_IS_EXISTED
}
```

### Values

#### `INVALID_DATA_INPUT`

Data input invalid.

#### `OPERATION_FAILED`

The operation failed.

#### `SUP_SOLUTION_TEMPLATE_APPLICATION_IS_EXISTED`

The solution template already exists.

#### `SUP_SOLUTION_TEMPLATE_APPLICATION_NOT_FOUND`

The solution template application was not found.

#### `SUP_SOLUTION_TEMPLATE_ITEM_CONFLICT`

Item conflict.

#### `SUP_SOLUTION_TEMPLATE_NOT_FOUND`

The solution template was not found.

#### `SUP_SOLUTION_TEMPLATE_STABLE_NAME_IS_EXISTED`

The stable name is already in use.
