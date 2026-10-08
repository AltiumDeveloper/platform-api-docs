---
title: "desPartUploadLibraryParts"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-upload-library-parts"
bounded_context: "Library Management"
kind: "mutations"
experimental: false
deprecated: false
---

# desPartUploadLibraryParts

Starts a background upload of custom library parts and returns the identifier of the started operation. EXPERIMENTAL: this mutation may change or be removed without notice.

### Type

#### [`DesPartStartUploadPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-start-upload-payload.md) object

Payload produced when a parts upload is started.

```graphql
desPartUploadLibraryParts(
  input: DesPartUploadLibraryPartsInput!
): DesPartStartUploadPayload!
```

### Arguments

#### `input` · [`DesPartUploadLibraryPartsInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upload-library-parts-input.md) non-null input

The custom library parts to upload.
