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

#### [`GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is not found.

#### [`GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object

Error that occurs when attempting to update a deleted [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md).

#### [`GloAppNameNotUpdatedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-name-not-updated-error.md) object

Error that occurs when updating the name for a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is unsuccessful.
