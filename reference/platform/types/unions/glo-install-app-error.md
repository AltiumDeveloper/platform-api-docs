---
title: "GloInstallAppError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-install-app-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloInstallAppError

### Member Of

[`GloInstallAppPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-install-app-payload.md) object

```graphql
union GloInstallAppError = GloAppNotInstalledError | GloAppAlreadyInstalledError | GloAppInstallDeniedError | GloAppDeletedError
```

### Possible types

#### [`GloAppNotInstalledError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-installed-error.md) object

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) cannot be installed into a workspace.

#### [`GloAppAlreadyInstalledError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-already-installed-error.md) object

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) cannot be installed into a workspace as it has already been installed.

#### [`GloAppInstallDeniedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-install-denied-error.md) object

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) cannot be installed into a workspace due to insufficient permissions.

#### [`GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object

Error that occurs when attempting to update a deleted [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md).
