---
title: "GloUpdateAppNameError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-update-app-name-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloUpdateAppNameError

### Member Of

[`GloUpdateAppNamePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-update-app-name-payload.md) object

```graphql
union GloUpdateAppNameError = GloAppNotFoundError | GloAppDeletedError | GloAppNameNotUpdatedError
```

### Possible types

#### [`GloUpdateAppNameError.GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object platform

Error that occurs when a `GloApp` is not found.

#### [`GloUpdateAppNameError.GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object platform

Error that occurs when attempting to update a deleted `GloApp`.

#### [`GloUpdateAppNameError.GloAppNameNotUpdatedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-name-not-updated-error.md) object platform

Error that occurs when updating the name for a `GloApp` is unsuccessful.
