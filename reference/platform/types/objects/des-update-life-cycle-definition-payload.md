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

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Life cycle definition identifier.
