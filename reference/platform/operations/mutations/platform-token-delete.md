---
title: "platformTokenDelete"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/platform-token-delete"
bounded_context: "Platform"
kind: "mutations"
experimental: false
deprecated: false
---

# platformTokenDelete

Deletes a [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md). Returns the identifier of the deleted token.

### Type

#### [`PlatformTokenDeletePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-delete-payload.md) object

```graphql
platformTokenDelete(
  input: PlatformTokenDeleteInput!
): PlatformTokenDeletePayload!
```

### Arguments

#### `input` · [`PlatformTokenDeleteInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/platform-token-delete-input.md) non-null input
