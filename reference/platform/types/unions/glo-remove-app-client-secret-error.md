---
title: "GloRemoveAppClientSecretError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-client-secret-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloRemoveAppClientSecretError

### Member Of

[`GloRemoveAppClientSecretPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-remove-app-client-secret-payload.md) object

```graphql
union GloRemoveAppClientSecretError = GloAppNotFoundError | GloAppDeletedError | GloAppClientSecretNotRemovedError
```

### Possible types

#### [`GloRemoveAppClientSecretError.GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object platform

Error that occurs when a `GloApp` is not found.

#### [`GloRemoveAppClientSecretError.GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object platform

Error that occurs when attempting to update a deleted `GloApp`.

#### [`GloRemoveAppClientSecretError.GloAppClientSecretNotRemovedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-client-secret-not-removed-error.md) object platform

Error that occurs when the \*OAuth client\* secret was not removed as expected from a `GloApp`.
