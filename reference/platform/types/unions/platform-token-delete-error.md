---
title: "PlatformTokenDeleteError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-token-delete-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# PlatformTokenDeleteError

### Member Of

[`PlatformTokenDeletePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-delete-payload.md) object

```graphql
union PlatformTokenDeleteError = PlatformTokenNotFoundError | PlatformTokenDeleteFailedError | PlatformTokenDeletePartiallyFailedError
```

### Possible types

#### [`PlatformTokenNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-not-found-error.md) object

Error that occurs when a [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) with the specified identifier could not be found.

#### [`PlatformTokenDeleteFailedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-delete-failed-error.md) object

Error returned by the Token API when a [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) could not be deleted.

#### [`PlatformTokenDeletePartiallyFailedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-delete-partially-failed-error.md) object

Error returned by the Token API when a [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) could not be fully deleted, leaving it in an inconsistent state.
