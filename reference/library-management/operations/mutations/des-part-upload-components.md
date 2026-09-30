---
title: "desPartUploadComponents"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-upload-components"
bounded_context: "Library Management"
kind: "mutations"
experimental: false
deprecated: false
---

# desPartUploadComponents

Starts a background upload of components with part choices and returns the identifier of the started operation. EXPERIMENTAL: this mutation may change or be removed without notice.

```graphql
desPartUploadComponents(
  input: DesPartUploadComponentsInput!
): DesPartStartUploadPayload!
```

### Arguments

#### `desPartUploadComponents.input` · [`DesPartUploadComponentsInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upload-components-input.md) non-null input library-management

The components to upload.

### Type

#### [`DesPartStartUploadPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-start-upload-payload.md) object library-management

Payload produced when a parts upload is started.
