---
title: "GloRestoreAppError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-restore-app-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloRestoreAppError

### Member Of

[`GloRestoreAppPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-restore-app-payload.md) object

```graphql
union GloRestoreAppError = GloAppOAuthClientNotRestoredError | GloAppMissingOAuthClientError | GloAppNotFoundError | GloAppNotDeletedError
```

### Possible types

#### [`GloAppOAuthClientNotRestoredError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-oauth-client-not-restored-error.md) object

Error that occurs when an \*OAuth client\* cannot be restored.

#### [`GloAppMissingOAuthClientError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-missing-oauth-client-error.md) object

Error that occurs when an \*OAuth client\* is missing.

#### [`GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is not found.

#### [`GloAppNotDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-deleted-error.md) object

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) cannot be deleted.
