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

#### [`GloUpdateAppHridError.GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object platform

Error that occurs when a `GloApp` is not found.

#### [`GloUpdateAppHridError.GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object platform

Error that occurs when attempting to update a deleted `GloApp`.

#### [`GloUpdateAppHridError.GloAppHridExistsError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-hrid-exists-error.md) object platform

Error that occurs when the input hrid already exists.

#### [`GloUpdateAppHridError.GloAppInvalidHridError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-invalid-hrid-error.md) object platform

Error that occurs when the input hrid is invalid.
