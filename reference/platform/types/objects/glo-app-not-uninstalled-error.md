---
title: "GloAppNotUninstalledError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-not-uninstalled-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppNotUninstalledError

Error that occurs when a `GloApp` cannot be uninstalled from a workspace.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface common

### Implemented By

[`GloUninstallAppError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-uninstall-app-error.md) union

```graphql
type GloAppNotUninstalledError implements Error {
  message: String!
}
```

### Fields

#### `GloAppNotUninstalledError.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
