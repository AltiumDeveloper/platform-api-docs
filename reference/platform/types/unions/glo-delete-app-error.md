---
title: "GloDeleteAppError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-delete-app-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloDeleteAppError

### Member Of

[`GloDeleteAppPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-delete-app-payload.md) object

```graphql
union GloDeleteAppError = GloAppOAuthClientNotDeletedError | GloAppNotDeletedError
```

### Possible types

#### [`GloAppOAuthClientNotDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-oauth-client-not-deleted-error.md) object

Error that occurs when an \*OAuth client\* cannot be deleted.

#### [`GloAppNotDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-deleted-error.md) object

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) cannot be deleted.
