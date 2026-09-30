---
title: "PlatformTokenUpdateError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/platform-token-update-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# PlatformTokenUpdateError

### Member Of

[`PlatformTokenUpdatePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-update-payload.md) object

```graphql
union PlatformTokenUpdateError = PlatformTokenUpdateInvalidError | PlatformTokenUpdateFailedError | PlatformTokenNameExistsError
```

### Possible types

#### [`PlatformTokenUpdateError.PlatformTokenUpdateInvalidError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-update-invalid-error.md) object platform

Error that occurs when a `PlatformToken` update request specifies no fields to update.

#### [`PlatformTokenUpdateError.PlatformTokenUpdateFailedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-update-failed-error.md) object platform

Error that occurs when no `PlatformToken` exists with the specified identifier.

#### [`PlatformTokenUpdateError.PlatformTokenNameExistsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-name-exists-error.md) object platform

Error that occurs when the input `PlatformToken` name already exists.
