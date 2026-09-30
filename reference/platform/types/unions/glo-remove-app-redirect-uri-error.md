---
title: "GloRemoveAppRedirectUriError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-redirect-uri-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloRemoveAppRedirectUriError

### Member Of

[`GloRemoveAppRedirectUriPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-remove-app-redirect-uri-payload.md) object

```graphql
union GloRemoveAppRedirectUriError = GloAppNotFoundError | GloAppDeletedError | GloAppRedirectUriNotUpdatedError
```

### Possible types

#### [`GloRemoveAppRedirectUriError.GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object platform

Error that occurs when a `GloApp` is not found.

#### [`GloRemoveAppRedirectUriError.GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object platform

Error that occurs when attempting to update a deleted `GloApp`.

#### [`GloRemoveAppRedirectUriError.GloAppRedirectUriNotUpdatedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-redirect-uri-not-updated-error.md) object platform

Error that occurs when updating the redirect URI for a `GloApp` is unsuccessful.
