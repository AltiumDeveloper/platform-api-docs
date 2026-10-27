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

#### [`PlatformTokenUpdateInvalidError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-update-invalid-error.md) object

Error that occurs when a [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) update request specifies no fields to update.

#### [`PlatformTokenUpdateFailedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-update-failed-error.md) object

Error that occurs when no [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) exists with the specified identifier.

#### [`PlatformTokenNameExistsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-token-name-exists-error.md) object

Error that occurs when the input [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) name already exists.
