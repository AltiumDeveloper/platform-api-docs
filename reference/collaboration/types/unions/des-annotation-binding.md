---
title: "DesAnnotationBinding"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/unions/des-annotation-binding"
bounded_context: "Collaboration"
kind: "unions"
experimental: false
deprecated: false
---

# DesAnnotationBinding

There may be multiple bindings associated with annotation instance. Together the bindings provide detailed information about the context of the annotation placement and associated design entities.

### Member Of

[`DesAnnotation`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotation.md) object

```graphql
union DesAnnotationBinding = DesAnnotationDocumentBinding | DesAnnotationReleaseBinding | DesAnnotationRevisionBinding | DesAnnotationManagedBomRowBinding | DesAnnotationDesignReviewBinding | DesAnnotationRequirementBinding
```

### Possible types

#### [`DesAnnotationBinding.DesAnnotationDocumentBinding`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotation-document-binding.md) object collaboration

#### [`DesAnnotationBinding.DesAnnotationReleaseBinding`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotation-release-binding.md) object collaboration

#### [`DesAnnotationBinding.DesAnnotationRevisionBinding`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotation-revision-binding.md) object collaboration

#### [`DesAnnotationBinding.DesAnnotationManagedBomRowBinding`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotation-managed-bom-row-binding.md) object collaboration

#### [`DesAnnotationBinding.DesAnnotationDesignReviewBinding`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotation-design-review-binding.md) object collaboration

#### [`DesAnnotationBinding.DesAnnotationRequirementBinding`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-annotation-requirement-binding.md) object collaboration
