---
title: "GloCreateAppInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-create-app-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCreateAppInput

Input for creating a new `GloApp`.

### Member Of

[`gloCreateApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-create-app.md) mutation

```graphql
input GloCreateAppInput {
  contactEmail: String!
  description: String!
  hrid: String!
  isWorkspaceApp: Boolean
  name: String!
  oAuthClient: GloCreateAppOAuthClientInput!
}
```

### Fields

#### `GloCreateAppInput.contactEmail` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Contact email address of the developer of a new App.

#### `GloCreateAppInput.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Description of a new App.

#### `GloCreateAppInput.hrid` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Unique human-readable identifier for a new App.

#### `GloCreateAppInput.isWorkspaceApp` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Whether the new App is a Workspace App. Defaults to `false`.

#### `GloCreateAppInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of a new App.

#### `GloCreateAppInput.oAuthClient` · [`GloCreateAppOAuthClientInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-create-app-oauth-client-input.md) non-null input platform

Input for creating a new OAuth 2 client.
