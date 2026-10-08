---
title: "DesUpdateComponentItemParametersPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-update-component-item-parameters-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateComponentItemParametersPayload

Payload associated with updating component item parameters.

### Returned By

[`desUpdateComponentItemParameters`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-component-item-parameters.md) mutation

```graphql
type DesUpdateComponentItemParametersPayload {
  componentId: ID!
  errors: [DesPayloadError!]!
}
```

### Fields

#### `componentId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Component identifier.

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.
