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

#### [`PlatformTokenDeleteError.PlatformTokenNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-not-found-error.md) object platform

Error that occurs when a `PlatformToken` with the specified identifier could not be found.

#### [`PlatformTokenDeleteError.PlatformTokenDeleteFailedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-delete-failed-error.md) object platform

Error returned by the Token API when a `PlatformToken` could not be deleted.

#### [`PlatformTokenDeleteError.PlatformTokenDeletePartiallyFailedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-delete-partially-failed-error.md) object platform

Error returned by the Token API when a `PlatformToken` could not be fully deleted, leaving it in an inconsistent state.
