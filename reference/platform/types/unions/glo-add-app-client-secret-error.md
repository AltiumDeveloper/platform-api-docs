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

#### [`GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is not found.

#### [`GloAppMissingOAuthClientError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-missing-oauth-client-error.md) object

Error that occurs when an \*OAuth client\* is missing.

#### [`GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object

Error that occurs when attempting to update a deleted [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md).

#### [`GloAppClientSecretNotAddedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-client-secret-not-added-error.md) object

Error that occurs when attempting to add a client secret to a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) \*OAuth client\* but the secret could not be added.
