---
title: "GloAppAlreadyInstalledError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-already-installed-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppAlreadyInstalledError

Error that occurs when a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) cannot be installed into a workspace as it has already been installed.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`GloInstallAppError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-install-app-error.md) union

```graphql
type GloAppAlreadyInstalledError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
