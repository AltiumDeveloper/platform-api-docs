---
title: "GloRemoveAppTokenExchangeSourceError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-token-exchange-source-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloRemoveAppTokenExchangeSourceError

### Member Of

[`GloRemoveAppTokenExchangeSourcePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-remove-app-token-exchange-source-payload.md) object

```graphql
union GloRemoveAppTokenExchangeSourceError = GloAppNotFoundError | GloAppDeletedError | GloAppMissingOAuthClientError | GloAppTokenExchangeSourcesNotUpdatedError
```

### Possible types

#### [`GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is not found.

#### [`GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object

Error that occurs when attempting to update a deleted [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md).

#### [`GloAppMissingOAuthClientError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-missing-oauth-client-error.md) object

Error that occurs when an \*OAuth client\* is missing.

#### [`GloAppTokenExchangeSourcesNotUpdatedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-token-exchange-sources-not-updated-error.md) object

Error that occurs when updating the token exchange sources for a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is unsuccessful.
