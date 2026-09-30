---
title: "DesUploadCollaborationPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-upload-collaboration-payload"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesUploadCollaborationPayload

Payload associated with uploading collaboration.

### Returned By

[`desUploadCollaboration`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/des-upload-collaboration.md) mutation

```graphql
type DesUploadCollaborationPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesUploadCollaborationPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
