---
title: "GloUpdateAppHridError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-update-app-hrid-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloUpdateAppHridError

### Member Of

[`GloUpdateAppHridPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-update-app-hrid-payload.md) object

```graphql
union GloUpdateAppHridError = GloAppNotFoundError | GloAppDeletedError | GloAppHridExistsError | GloAppInvalidHridError
```

### Possible types

#### [`GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is not found.

#### [`GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object

Error that occurs when attempting to update a deleted [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md).

#### [`GloAppHridExistsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-hrid-exists-error.md) object

Error that occurs when the input hrid already exists.

#### [`GloAppInvalidHridError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-invalid-hrid-error.md) object

Error that occurs when the input hrid is invalid.
