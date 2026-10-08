---
title: "DesPartErrorPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-error-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartErrorPayload

Represents a standard error payload.

### Member Of

[`DesPartAcknowledgeUploadOperationPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-acknowledge-upload-operation-payload.md) object · [`DesPartAttachTagPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attach-tag-payload.md) object · [`DesPartChangeLifecycleStatePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-change-lifecycle-state-payload.md) object · [`DesPartCreateTagPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-create-tag-payload.md) object · [`DesPartDeleteTagPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-delete-tag-payload.md) object · [`DesPartDetachTagPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-detach-tag-payload.md) object · [`DesPartRemoveCustomPartsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-remove-custom-parts-payload.md) object · [`DesPartStartUploadPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-start-upload-payload.md) object · [`DesPartUploadComponentsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-components-payload.md) object · [`DesPartUploadCustomPartFilePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-custom-part-file-payload.md) object · [`DesPartUploadLibraryPartsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-library-parts-payload.md) object · [`DesPartUploadPartFileColumnsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-part-file-columns-payload.md) object · [`DesPartUpsertCustomPartsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upsert-custom-parts-payload.md) object

```graphql
type DesPartErrorPayload {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The human-readable description of the error.
