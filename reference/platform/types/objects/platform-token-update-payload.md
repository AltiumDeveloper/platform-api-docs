---
title: "PlatformTokenUpdatePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-update-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformTokenUpdatePayload

### Returned By

[`platformTokenUpdate`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-token-update.md) mutation

```graphql
type PlatformTokenUpdatePayload {
  errors: [PlatformTokenUpdateError!]
  platformToken: PlatformToken
}
```

### Fields

#### `errors` · [`[PlatformTokenUpdateError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-token-update-error.md) list union

#### `platformToken` · [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) interface
