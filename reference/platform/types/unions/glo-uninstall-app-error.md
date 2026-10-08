---
title: "GloUninstallAppError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-uninstall-app-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloUninstallAppError

### Member Of

[`GloUninstallAppPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-uninstall-app-payload.md) object

```graphql
union GloUninstallAppError = GloAppNotUninstalledError | GloAppDeletedError
```

### Possible types

#### [`GloAppNotUninstalledError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-uninstalled-error.md) object

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) cannot be uninstalled from a workspace.

#### [`GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object

Error that occurs when attempting to update a deleted [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md).
