---
title: "GloCreateAppFromOAuthClientError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-create-app-from-oauth-client-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloCreateAppFromOAuthClientError

### Member Of

[`GloCreateAppFromOAuthClientPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-create-app-from-oauth-client-payload.md) object

```graphql
union GloCreateAppFromOAuthClientError = GloAppMissingOAuthClientError | GloAppHridExistsError | GloAppInvalidHridError | GloAppInvalidEmailError | GloAppClientExistsError | GloAppOAuthClientGrantAccessError
```

### Possible types

#### [`GloCreateAppFromOAuthClientError.GloAppMissingOAuthClientError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-missing-oauth-client-error.md) object platform

Error that occurs when an \*OAuth client\* is missing.

#### [`GloCreateAppFromOAuthClientError.GloAppHridExistsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-hrid-exists-error.md) object platform

Error that occurs when the input hrid already exists.

#### [`GloCreateAppFromOAuthClientError.GloAppInvalidHridError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-invalid-hrid-error.md) object platform

Error that occurs when the input hrid is invalid.

#### [`GloCreateAppFromOAuthClientError.GloAppInvalidEmailError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-invalid-email-error.md) object platform

Error that occurs when the input email is invalid.

#### [`GloCreateAppFromOAuthClientError.GloAppClientExistsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-client-exists-error.md) object platform

Error that occurs when attempting to create a new `GloApp` with an \*OAuth client\* that is already associated with another `GloApp`.

#### [`GloCreateAppFromOAuthClientError.GloAppOAuthClientGrantAccessError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-oauth-client-grant-access-error.md) object platform

Error that occurs when granting access to a \*OAuth client\* fails.
