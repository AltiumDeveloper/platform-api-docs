---
title: "GloAddAppClientSecretError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-client-secret-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloAddAppClientSecretError

### Member Of

[`GloAddAppClientSecretPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-add-app-client-secret-payload.md) object

```graphql
union GloAddAppClientSecretError = GloAppNotFoundError | GloAppMissingOAuthClientError | GloAppDeletedError | GloAppClientSecretNotAddedError
```

### Possible types

#### [`GloAddAppClientSecretError.GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object platform

Error that occurs when a `GloApp` is not found.

#### [`GloAddAppClientSecretError.GloAppMissingOAuthClientError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-missing-oauth-client-error.md) object platform

Error that occurs when an \*OAuth client\* is missing.

#### [`GloAddAppClientSecretError.GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object platform

Error that occurs when attempting to update a deleted `GloApp`.

#### [`GloAddAppClientSecretError.GloAppClientSecretNotAddedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-client-secret-not-added-error.md) object platform

Error that occurs when attempting to add a client secret to a `GloApp` \*OAuth client\* but the secret could not be added.
