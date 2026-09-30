---
title: "GloRemoveAppGrantTypeError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-grant-type-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloRemoveAppGrantTypeError

### Member Of

[`GloRemoveAppGrantTypePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-remove-app-grant-type-payload.md) object

```graphql
union GloRemoveAppGrantTypeError = GloAppNotFoundError | GloAppDeletedError | GloAppGrantTypeNotUpdatedError
```

### Possible types

#### [`GloRemoveAppGrantTypeError.GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object platform

Error that occurs when a `GloApp` is not found.

#### [`GloRemoveAppGrantTypeError.GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object platform

Error that occurs when attempting to update a deleted `GloApp`.

#### [`GloRemoveAppGrantTypeError.GloAppGrantTypeNotUpdatedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-grant-type-not-updated-error.md) object platform

Error that occurs when updating the grant type for a `GloApp` is unsuccessful.
