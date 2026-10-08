---
title: "GloCreateAppInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-create-app-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCreateAppInput

Input for creating a new [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md).

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

#### `contactEmail` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Contact email address of the developer of a new App.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Description of a new App.

#### `hrid` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Unique human-readable identifier for a new App.

#### `isWorkspaceApp` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Whether the new App is a Workspace App. Defaults to `false`.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of a new App.

#### `oAuthClient` · [`GloCreateAppOAuthClientInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-create-app-oauth-client-input.md) non-null input

Input for creating a new OAuth 2 client.
