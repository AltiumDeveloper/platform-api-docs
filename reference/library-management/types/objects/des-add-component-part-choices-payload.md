---
title: "DesAddComponentPartChoicesPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-add-component-part-choices-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesAddComponentPartChoicesPayload

Payload associated with adding part choices for a component.

### Returned By

[`desAddComponentPartChoices`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-add-component-part-choices.md) mutation

```graphql
type DesAddComponentPartChoicesPayload {
  componentId: ID!
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesAddComponentPartChoicesPayload.componentId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Component identifier. If revision control is enabled, this will refer to the created revision.

#### `DesAddComponentPartChoicesPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
