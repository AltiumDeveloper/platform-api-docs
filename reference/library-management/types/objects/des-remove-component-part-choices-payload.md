---
title: "DesRemoveComponentPartChoicesPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-remove-component-part-choices-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesRemoveComponentPartChoicesPayload

Payload associated with removing part choices for a component.

### Returned By

[`desRemoveComponentPartChoices`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-remove-component-part-choices.md) mutation

```graphql
type DesRemoveComponentPartChoicesPayload {
  componentId: ID!
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesRemoveComponentPartChoicesPayload.componentId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Component identifier. If revision control is enabled, this will refer to the created revision.

#### `DesRemoveComponentPartChoicesPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
