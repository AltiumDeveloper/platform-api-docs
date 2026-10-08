---
title: "GloUpdateAppContactEmailError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-update-app-contact-email-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GloUpdateAppContactEmailError

### Member Of

[`GloUpdateAppContactEmailPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-update-app-contact-email-payload.md) object

```graphql
union GloUpdateAppContactEmailError = GloAppNotFoundError | GloAppDeletedError | GloAppInvalidEmailError
```

### Possible types

#### [`GloAppNotFoundError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-found-error.md) object

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is not found.

#### [`GloAppDeletedError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error.md) object

Error that occurs when attempting to update a deleted [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md).

#### [`GloAppInvalidEmailError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-invalid-email-error.md) object

Error that occurs when the input email is invalid.
