---
title: "gloAppByClientId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-app-by-client-id"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# gloAppByClientId

Gets the `GloApp` with a `GloOAuthClient` that has the specified Client identifier.

```graphql
gloAppByClientId(
  clientId: String!
): GloApp
```

### Arguments

#### `gloAppByClientId.clientId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The Client identifier of the `GloOAuthClient` associated with the App to be retrieved.

### Type

#### [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object platform

Represents an Altium application.
