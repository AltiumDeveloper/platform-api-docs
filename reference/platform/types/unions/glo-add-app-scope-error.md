---
title: "GloAddAppScopeError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-scope-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloAddAppScopeError

### Member Of

[`GloAddAppScopePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-add-app-scope-payload.md) object

```graphql
union GloAddAppScopeError = GloAppNotFoundError | GloAppDeletedError | GloAppScopeNotUpdatedError
```

### Possible types

#### [`GloAddAppScopeError.GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object platform

Error that occurs when a `GloApp` is not found.

#### [`GloAddAppScopeError.GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object platform

Error that occurs when attempting to update a deleted `GloApp`.

#### [`GloAddAppScopeError.GloAppScopeNotUpdatedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-scope-not-updated-error.md) object platform

Error that occurs when updating the scope for a `GloApp` is unsuccessful.
