---
title: "GloAddAppTokenExchangeSourcesError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-token-exchange-sources-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloAddAppTokenExchangeSourcesError

### Member Of

[`GloAddAppTokenExchangeSourcesPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-add-app-token-exchange-sources-payload.md) object

```graphql
union GloAddAppTokenExchangeSourcesError = GloAppNotFoundError | GloAppDeletedError | GloAppMissingOAuthClientError | GloAppTokenExchangeSourcesDeletedError | GloAppTokenExchangeSourcesNotUpdatedError
```

### Possible types

#### [`GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is not found.

#### [`GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object

Error that occurs when attempting to update a deleted [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md).

#### [`GloAppMissingOAuthClientError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-missing-oauth-client-error.md) object

Error that occurs when an \*OAuth client\* is missing.

#### [`GloAppTokenExchangeSourcesDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-token-exchange-sources-deleted-error.md) object

Error that occurs when deleted `GloApp`s are given as token exchange sources. Lists every deleted App found in the request.

#### [`GloAppTokenExchangeSourcesNotUpdatedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-token-exchange-sources-not-updated-error.md) object

Error that occurs when updating the token exchange sources for a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is unsuccessful.
