---
title: "gloAppByClientId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-app-by-client-id"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# gloAppByClientId

Gets the [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) with a [`GloOAuthClient`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-oauth-client.md) that has the specified Client identifier.

### Type

#### [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object

Represents an Altium application.

```graphql
gloAppByClientId(
  clientId: String!
): GloApp
```

### Arguments

#### `clientId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The Client identifier of the [`GloOAuthClient`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-oauth-client.md) associated with the App to be retrieved.
