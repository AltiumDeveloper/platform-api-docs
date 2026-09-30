---
title: "GloAddAppRedirectUriError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-redirect-uri-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloAddAppRedirectUriError

### Member Of

[`GloAddAppRedirectUriPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-add-app-redirect-uri-payload.md) object

```graphql
union GloAddAppRedirectUriError = GloAppNotFoundError | GloAppDeletedError | GloAppRedirectUriNotUpdatedError
```

### Possible types

#### [`GloAddAppRedirectUriError.GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object platform

Error that occurs when a `GloApp` is not found.

#### [`GloAddAppRedirectUriError.GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object platform

Error that occurs when attempting to update a deleted `GloApp`.

#### [`GloAddAppRedirectUriError.GloAppRedirectUriNotUpdatedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-redirect-uri-not-updated-error.md) object platform

Error that occurs when updating the redirect URI for a `GloApp` is unsuccessful.
