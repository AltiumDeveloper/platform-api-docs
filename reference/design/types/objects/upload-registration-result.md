---
title: "UploadRegistrationResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/upload-registration-result"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# UploadRegistrationResult

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`DesignRegisterUploadPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-register-upload-payload.md) object

```graphql
type UploadRegistrationResult {
  uploadId: String!
}
```

### Fields

#### `UploadRegistrationResult.uploadId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the design upload.
