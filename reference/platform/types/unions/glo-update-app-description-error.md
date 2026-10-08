---
title: "GloUpdateAppDescriptionError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-update-app-description-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloUpdateAppDescriptionError

### Member Of

[`GloUpdateAppDescriptionPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-update-app-description-payload.md) object

```graphql
union GloUpdateAppDescriptionError = GloAppNotFoundError | GloAppDeletedError
```

### Possible types

#### [`GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is not found.

#### [`GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object

Error that occurs when attempting to update a deleted [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md).
