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

#### [`GloAppMissingOAuthClientError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-missing-oauth-client-error.md) object

Error that occurs when an \*OAuth client\* is missing.

#### [`GloAppHridExistsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-hrid-exists-error.md) object

Error that occurs when the input hrid already exists.

#### [`GloAppInvalidHridError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-invalid-hrid-error.md) object

Error that occurs when the input hrid is invalid.

#### [`GloAppInvalidEmailError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-invalid-email-error.md) object

Error that occurs when the input email is invalid.

#### [`GloAppClientExistsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-client-exists-error.md) object

Error that occurs when attempting to create a new [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) with an \*OAuth client\* that is already associated with another [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md).

#### [`GloAppOAuthClientGrantAccessError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-oauth-client-grant-access-error.md) object

Error that occurs when granting access to a \*OAuth client\* fails.
