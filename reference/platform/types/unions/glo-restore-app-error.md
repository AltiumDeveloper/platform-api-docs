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

#### [`GloRestoreAppError.GloAppOAuthClientNotRestoredError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-oauth-client-not-restored-error.md) object platform

Error that occurs when an \*OAuth client\* cannot be restored.

#### [`GloRestoreAppError.GloAppMissingOAuthClientError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-missing-oauth-client-error.md) object platform

Error that occurs when an \*OAuth client\* is missing.

#### [`GloRestoreAppError.GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object platform

Error that occurs when a `GloApp` is not found.

#### [`GloRestoreAppError.GloAppNotDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-deleted-error.md) object platform

Error that occurs when a `GloApp` cannot be deleted.
