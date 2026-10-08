---
title: "DesUploadProjectPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-upload-project-payload"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesUploadProjectPayload

Payload associated with uploading project.

### Returned By

[`desUploadProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/des-upload-project.md) mutation

```graphql
type DesUploadProjectPayload {
  errors: [DesPayloadError!]!
  projectId: ID!
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique project identifier.
