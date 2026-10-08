---
title: "desPartUploadCustomPartImage"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-upload-custom-part-image"
bounded_context: "Library Management"
kind: "mutations"
experimental: false
deprecated: false
---

# desPartUploadCustomPartImage

Uploads an image file for a custom part and returns its public service URL.

### Type

#### [`DesPartUploadCustomPartFilePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-custom-part-file-payload.md) object

Payload produced when uploading a custom part file.

```graphql
desPartUploadCustomPartImage(
  input: DesPartUploadCustomPartFileInput!
): DesPartUploadCustomPartFilePayload!
```

### Arguments

#### `input` · [`DesPartUploadCustomPartFileInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upload-custom-part-file-input.md) non-null input

The image file to upload.
