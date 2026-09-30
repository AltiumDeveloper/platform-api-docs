---
title: "DesUpdateComponentRevisionParametersPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-update-component-revision-parameters-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateComponentRevisionParametersPayload

Payload associated with updating component revision parameters.

### Returned By

[`desUpdateComponentRevisionParameters`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-component-revision-parameters.md) mutation

```graphql
type DesUpdateComponentRevisionParametersPayload {
  componentId: ID!
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesUpdateComponentRevisionParametersPayload.componentId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Component identifier.

#### `DesUpdateComponentRevisionParametersPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
