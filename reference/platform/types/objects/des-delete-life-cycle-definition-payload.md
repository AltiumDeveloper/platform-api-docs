---
title: "DesDeleteLifeCycleDefinitionPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-delete-life-cycle-definition-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesDeleteLifeCycleDefinitionPayload

Payload associated with deleting a life cycle definition.

### Returned By

[`desDeleteLifeCycleDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-delete-life-cycle-definition.md) mutation

```graphql
type DesDeleteLifeCycleDefinitionPayload {
  errors: [DesPayloadError!]!
  id: ID!
}
```

### Fields

#### `DesDeleteLifeCycleDefinitionPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.

#### `DesDeleteLifeCycleDefinitionPayload.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Life cycle definition identifier.
