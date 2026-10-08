---
title: "SupSolutionTemplateOperationFailedError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-operation-failed-error"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateOperationFailedError

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`SupSolutionTemplateCreateSolutionTemplateApplicationError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-create-solution-template-application-error.md) union · [`SupSolutionTemplateCreateSolutionTemplateError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-create-solution-template-error.md) union · [`SupSolutionTemplateDeleteSolutionTemplateApplicationError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-delete-solution-template-application-error.md) union · [`SupSolutionTemplateDeleteSolutionTemplateError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-delete-solution-template-error.md) union · [`SupSolutionTemplateIndexSolutionTemplateError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-index-solution-template-error.md) union · [`SupSolutionTemplatePatchCompatibleEvalKitsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-patch-compatible-eval-kits-error.md) union · [`SupSolutionTemplatePatchEsdSourceError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-patch-esd-source-error.md) union · [`SupSolutionTemplatePatchKeyFeatureGroupsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-patch-key-feature-groups-error.md) union · [`SupSolutionTemplatePatchParametersError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-patch-parameters-error.md) union · [`SupSolutionTemplatePatchPreviewImagesError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-patch-preview-images-error.md) union · [`SupSolutionTemplatePatchRefDesignsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-patch-ref-designs-error.md) union · [`SupSolutionTemplatePatchTagsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-patch-tags-error.md) union · [`SupSolutionTemplateSetCompatibleEvalKitsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-set-compatible-eval-kits-error.md) union · [`SupSolutionTemplateSetKeyFeatureGroupsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-set-key-feature-groups-error.md) union · [`SupSolutionTemplateSetParametersError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-set-parameters-error.md) union · [`SupSolutionTemplateSetPreviewImagesError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-set-preview-images-error.md) union · [`SupSolutionTemplateSetRefDesignsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-set-ref-designs-error.md) union · [`SupSolutionTemplateSetTagsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-set-tags-error.md) union · [`SupSolutionTemplateUpdateSolutionTemplateApplicationError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-update-solution-template-application-error.md) union · [`SupSolutionTemplateUpdateSolutionTemplateError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-update-solution-template-error.md) union · [`SupSolutionTemplateUpdateSolutionTemplateStatusError`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/unions/sup-solution-template-update-solution-template-status-error.md) union

```graphql
type SupSolutionTemplateOperationFailedError implements Error {
  errorCode: SupSolutionTemplateErrorCode!
  message: String!
}
```

### Fields

#### `errorCode` · [`SupSolutionTemplateErrorCode!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-solution-template-error-code.md) non-null enum

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
