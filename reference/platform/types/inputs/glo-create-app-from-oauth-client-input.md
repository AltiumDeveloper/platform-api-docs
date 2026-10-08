---
title: "GloCreateAppFromOAuthClientInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-create-app-from-oauth-client-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCreateAppFromOAuthClientInput

Input for creating a new [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md).

### Member Of

[`gloCreateAppFromOAuthClient`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-create-app-from-oauth-client.md) mutation

```graphql
input GloCreateAppFromOAuthClientInput {
  clientId: String!
  contactEmail: String!
  description: String!
  hrid: String!
  name: String
}
```

### Fields

#### `clientId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Client identifier of an existing OAuth 2 client to associate with the App.

#### `contactEmail` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Contact email address of the developer of the new App.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Description of the new App.

#### `hrid` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Unique human-readable identifier for the new App.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Name of the new App. If empty, the name of the OAuth 2.0 client will be used.
