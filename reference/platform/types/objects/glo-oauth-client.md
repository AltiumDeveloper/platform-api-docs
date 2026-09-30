---
title: "GloOAuthClient"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-oauth-client"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloOAuthClient

Represents an \*OAuth 2.0 client\*.

### Member Of

[`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object

```graphql
type GloOAuthClient {
  absoluteRefreshTokenLifetime: Int!
  accessTokenLifetime: Int!
  authorizationCodeLifetime: Int!
  clientId: String!
  clientSecret: String
  grantTypes: [String!]!
  identityTokenLifetime: Int!
  redirectUris: [String!]!
  requireConsent: Boolean!
  requirePkce: Boolean!
  requireSecret: Boolean!
  scopes: [String!]!
  slidingRefreshTokenLifetime: Int!
}
```

### Fields

#### `GloOAuthClient.absoluteRefreshTokenLifetime` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The absolute lifetime of refresh tokens issued to this \*OAuth 2.0 client\*, in seconds.

#### `GloOAuthClient.accessTokenLifetime` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The lifetime of access tokens issued to this \*OAuth 2.0 client\*, in seconds.

#### `GloOAuthClient.authorizationCodeLifetime` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The lifetime of authorization codes issued to this \*OAuth 2.0 client\*, in seconds.

#### `GloOAuthClient.clientId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The client identifier for this \*OAuth 2.0 client\*.

#### `GloOAuthClient.clientSecret` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The client secret for this \*OAuth 2.0 client\*. Only available at client creation.

#### `GloOAuthClient.grantTypes` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The list of grant types this \*OAuth 2.0 client\* can use.

#### `GloOAuthClient.identityTokenLifetime` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The lifetime of identity tokens issued to this \*OAuth 2.0 client\*, in seconds.

#### `GloOAuthClient.redirectUris` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The list of redirect URIs associated with this \*OAuth 2.0 client\*.

#### `GloOAuthClient.requireConsent` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Whether this \*OAuth 2.0\* client requires consent to be approved before it can create user access tokens.

#### `GloOAuthClient.requirePkce` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Whether PKCE is required when this \*OAuth 2.0 client\* uses the authorization code grant.

#### `GloOAuthClient.requireSecret` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Whether this \*OAuth 2.0 client\* needs to use a client secret requesting tokens.

#### `GloOAuthClient.scopes` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The list of scopes this \*OAuth 2.0 client\* can use.

#### `GloOAuthClient.slidingRefreshTokenLifetime` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The sliding lifetime of refresh tokens issued to this \*OAuth 2.0 client\*, in seconds.
