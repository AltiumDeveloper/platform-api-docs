---
title: "platformTokenDelete"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-token-delete"
bounded_context: "Platform"
kind: "mutations"
experimental: false
deprecated: false
---

# platformTokenDelete

Deletes a `PlatformToken`. Returns the identifier of the deleted token.

```graphql
platformTokenDelete(
  input: PlatformTokenDeleteInput!
): PlatformTokenDeletePayload!
```

### Arguments

#### `platformTokenDelete.input` · [`PlatformTokenDeleteInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-token-delete-input.md) non-null input platform

### Type

#### [`PlatformTokenDeletePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-delete-payload.md) object platform
