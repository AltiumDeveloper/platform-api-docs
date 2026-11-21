---
title: "GloSetAppAutoInstallableError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-set-app-auto-installable-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloSetAppAutoInstallableError

### Member Of

[`GloSetAppAutoInstallablePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-set-app-auto-installable-payload.md) object

```graphql
union GloSetAppAutoInstallableError = GloAppDeletedError | GloAppNotFoundError
```

### Possible types

#### [`GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object

Error that occurs when attempting to update a deleted [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md).

#### [`GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is not found.
