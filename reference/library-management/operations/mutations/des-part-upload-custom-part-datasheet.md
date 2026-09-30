---
title: "desPartUploadCustomPartDatasheet"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-upload-custom-part-datasheet"
bounded_context: "Library Management"
kind: "mutations"
experimental: false
deprecated: false
---

# desPartUploadCustomPartDatasheet

Uploads a datasheet file for a custom part and returns its public service URL.

```graphql
desPartUploadCustomPartDatasheet(
  input: DesPartUploadCustomPartFileInput!
): DesPartUploadCustomPartFilePayload!
```

### Arguments

#### `desPartUploadCustomPartDatasheet.input` · [`DesPartUploadCustomPartFileInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upload-custom-part-file-input.md) non-null input library-management

The datasheet file to upload.

### Type

#### [`DesPartUploadCustomPartFilePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-custom-part-file-payload.md) object library-management

Payload produced when uploading a custom part file.
