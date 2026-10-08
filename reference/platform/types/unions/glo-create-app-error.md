---
title: "GloCreateAppError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-create-app-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloCreateAppError

### Member Of

[`GloCreateAppPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-create-app-payload.md) object

```graphql
union GloCreateAppError = GloAppInvalidOAuthError | GloAppHridExistsError | GloAppInvalidHridError | GloAppInvalidEmailError | GloAppOAuthClientGrantAccessError
```

### Possible types

#### [`GloAppInvalidOAuthError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-invalid-oauth-error.md) object

Error that occurs when an \*OAuth client\* is invalid.

#### [`GloAppHridExistsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-hrid-exists-error.md) object

Error that occurs when the input hrid already exists.

#### [`GloAppInvalidHridError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-invalid-hrid-error.md) object

Error that occurs when the input hrid is invalid.

#### [`GloAppInvalidEmailError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-invalid-email-error.md) object

Error that occurs when the input email is invalid.

#### [`GloAppOAuthClientGrantAccessError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-oauth-client-grant-access-error.md) object

Error that occurs when granting access to a \*OAuth client\* fails.
