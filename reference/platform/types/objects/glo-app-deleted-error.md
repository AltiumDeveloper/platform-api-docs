---
title: "GloAppDeletedError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-deleted-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppDeletedError

Error that occurs when attempting to update a deleted `GloApp`.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface common

### Implemented By

[`GloAddAppClientSecretError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-client-secret-error.md) union · [`GloAddAppGrantTypeError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-grant-type-error.md) union · [`GloAddAppRedirectUriError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-redirect-uri-error.md) union · [`GloAddAppScopeError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-add-app-scope-error.md) union · [`GloInstallAppError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-install-app-error.md) union · [`GloRemoveAppClientSecretError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-client-secret-error.md) union · [`GloRemoveAppGrantTypeError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-grant-type-error.md) union · [`GloRemoveAppRedirectUriError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-redirect-uri-error.md) union · [`GloRemoveAppScopeError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-remove-app-scope-error.md) union · [`GloUninstallAppError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-uninstall-app-error.md) union · [`GloUpdateAppContactEmailError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-update-app-contact-email-error.md) union · [`GloUpdateAppDescriptionError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-update-app-description-error.md) union · [`GloUpdateAppHridError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-update-app-hrid-error.md) union · [`GloUpdateAppNameError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-update-app-name-error.md) union

```graphql
type GloAppDeletedError implements Error {
  message: String!
}
```

### Fields

#### `GloAppDeletedError.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
