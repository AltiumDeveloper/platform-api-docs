---
title: "DesCreateLifeCycleDefinitionPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-create-life-cycle-definition-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesCreateLifeCycleDefinitionPayload

Payload associated with creating a life cycle definition.

### Returned By

[`desCreateLifeCycleDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-create-life-cycle-definition.md) mutation

```graphql
type DesCreateLifeCycleDefinitionPayload {
  errors: [DesPayloadError!]!
  id: ID!
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Life cycle definition identifier.
