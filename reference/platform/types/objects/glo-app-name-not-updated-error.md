---
title: "GloAppNameNotUpdatedError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app-name-not-updated-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloAppNameNotUpdatedError

Error that occurs when updating the name for a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is unsuccessful.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`GloUpdateAppNameError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/glo-update-app-name-error.md) union

```graphql
type GloAppNameNotUpdatedError implements Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
