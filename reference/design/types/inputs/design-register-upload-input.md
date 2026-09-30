---
title: "DesignRegisterUploadInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/design-register-upload-input"
bounded_context: "Design"
kind: "inputs"
experimental: true
deprecated: false
---

# DesignRegisterUploadInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents input value for generate design data mutation.

### Member Of

[`designRegisterUpload`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/design-register-upload.md) mutation

```graphql
input DesignRegisterUploadInput {
  designId: ID @deprecated
  fileId: String!
}
```

### Fields

#### `DesignRegisterUploadInput.fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier of the zip file containing the design files.

#### Deprecated

#### `DesignRegisterUploadInput.designId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar common

> **Deprecated:** DesignId is no longer used for uploads.
