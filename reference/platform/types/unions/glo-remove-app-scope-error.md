---
title: "GloRemoveAppScopeError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-scope-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloRemoveAppScopeError

### Member Of

[`GloRemoveAppScopePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-remove-app-scope-payload.md) object

```graphql
union GloRemoveAppScopeError = GloAppNotFoundError | GloAppDeletedError | GloAppScopeNotUpdatedError
```

### Possible types

#### [`GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is not found.

#### [`GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object

Error that occurs when attempting to update a deleted [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md).

#### [`GloAppScopeNotUpdatedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-scope-not-updated-error.md) object

Error that occurs when updating the scope for a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is unsuccessful.
