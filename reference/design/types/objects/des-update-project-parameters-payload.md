---
title: "DesUpdateProjectParametersPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-update-project-parameters-payload"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateProjectParametersPayload

Payload associated with updating project parameters.

### Returned By

[`desUpdateProjectParameters`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/des-update-project-parameters.md) mutation

```graphql
type DesUpdateProjectParametersPayload {
  errors: [DesPayloadError!]!
  projectId: ID!
}
```

### Fields

#### `DesUpdateProjectParametersPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.

#### `DesUpdateProjectParametersPayload.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Project identifier.
