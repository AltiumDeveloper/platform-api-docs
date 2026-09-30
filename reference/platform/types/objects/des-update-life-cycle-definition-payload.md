---
title: "DesUpdateLifeCycleDefinitionPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-update-life-cycle-definition-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateLifeCycleDefinitionPayload

Payload associated with updating a life cycle definition.

### Returned By

[`desUpdateLifeCycleDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-update-life-cycle-definition.md) mutation

```graphql
type DesUpdateLifeCycleDefinitionPayload {
  errors: [DesPayloadError!]!
  id: ID!
}
```

### Fields

#### `DesUpdateLifeCycleDefinitionPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.

#### `DesUpdateLifeCycleDefinitionPayload.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Life cycle definition identifier.
