---
title: "DesPartUploadComponentsPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-components-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartUploadComponentsPayload

Payload produced when uploading components.

### Returned By

[`desPartUploadComponentsReport`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-upload-components-report.md) query

```graphql
type DesPartUploadComponentsPayload {
  errors: [DesPartErrorPayload!]!
  results: [DesPartUploadComponentOperationResult!]!
}
```

### Fields

#### `errors` · [`[DesPartErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-error-payload.md) non-null object

Errors that occurred while performing the operation.

#### `results` · [`[DesPartUploadComponentOperationResult!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-upload-component-operation-result.md) non-null object

A collection of results for each component.
