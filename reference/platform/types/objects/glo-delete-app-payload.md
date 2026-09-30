---
title: "GloDeleteAppPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-delete-app-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloDeleteAppPayload

### Returned By

[`gloDeleteApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-delete-app.md) mutation

```graphql
type GloDeleteAppPayload {
  errors: [GloDeleteAppError!]
  id: ID
}
```

### Fields

#### `GloDeleteAppPayload.errors` · [`[GloDeleteAppError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-delete-app-error.md) list union platform

#### `GloDeleteAppPayload.id` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar common
