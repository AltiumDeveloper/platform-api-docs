---
title: "GloAddAppGrantTypeError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-grant-type-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloAddAppGrantTypeError

### Member Of

[`GloAddAppGrantTypePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-add-app-grant-type-payload.md) object

```graphql
union GloAddAppGrantTypeError = GloAppNotFoundError | GloAppDeletedError | GloAppGrantTypeNotUpdatedError
```

### Possible types

#### [`GloAddAppGrantTypeError.GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object platform

Error that occurs when a `GloApp` is not found.

#### [`GloAddAppGrantTypeError.GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object platform

Error that occurs when attempting to update a deleted `GloApp`.

#### [`GloAddAppGrantTypeError.GloAppGrantTypeNotUpdatedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-grant-type-not-updated-error.md) object platform

Error that occurs when updating the grant type for a `GloApp` is unsuccessful.
