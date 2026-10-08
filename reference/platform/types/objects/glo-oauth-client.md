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

#### `absoluteRefreshTokenLifetime` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The absolute lifetime of refresh tokens issued to this \*OAuth 2.0 client\*, in seconds.

#### `accessTokenLifetime` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The lifetime of access tokens issued to this \*OAuth 2.0 client\*, in seconds.

#### `authorizationCodeLifetime` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The lifetime of authorization codes issued to this \*OAuth 2.0 client\*, in seconds.

#### `clientId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The client identifier for this \*OAuth 2.0 client\*.

#### `clientSecret` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The client secret for this \*OAuth 2.0 client\*. Only available at client creation.

#### `grantTypes` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The list of grant types this \*OAuth 2.0 client\* can use.

#### `identityTokenLifetime` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The lifetime of identity tokens issued to this \*OAuth 2.0 client\*, in seconds.

#### `redirectUris` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The list of redirect URIs associated with this \*OAuth 2.0 client\*.

#### `requireConsent` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Whether this \*OAuth 2.0\* client requires consent to be approved before it can create user access tokens.

#### `requirePkce` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Whether PKCE is required when this \*OAuth 2.0 client\* uses the authorization code grant.

#### `requireSecret` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Whether this \*OAuth 2.0 client\* needs to use a client secret requesting tokens.

#### `scopes` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The list of scopes this \*OAuth 2.0 client\* can use.

#### `slidingRefreshTokenLifetime` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The sliding lifetime of refresh tokens issued to this \*OAuth 2.0 client\*, in seconds.
