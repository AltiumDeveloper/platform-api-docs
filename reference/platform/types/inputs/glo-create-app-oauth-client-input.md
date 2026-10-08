---
title: "GloCreateAppOAuthClientInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-create-app-oauth-client-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloCreateAppOAuthClientInput

Input for creating a new \*OAuth 2.0 client\*.

### Member Of

[`GloCreateAppInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-create-app-input.md) input

```graphql
input GloCreateAppOAuthClientInput {
  accessTokenLifetime: Int
  clientId: String
  grantTypes: [String!]!
  postLogoutRedirectUris: [String!]
  redirectUris: [String!]!
  refreshTokenAbsoluteLifetime: Int
  refreshTokenExpirationType: GloOAuthClientRefreshTokenExpirationType
  refreshTokenSlidingLifetime: Int
  requireConsent: Boolean!
  requireSecret: Boolean!
  scopes: [String!]!
}
```

### Fields

#### `accessTokenLifetime` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Maximum lifetime of access tokens issued to the new \*OAuth 2.0 client\* in seconds. Must be greater than zero. Defaults to 14400 (4 hours) when omitted.

#### `clientId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Client identifier of the new \*OAuth 2.0 client\*.

#### `grantTypes` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Grant types the new \*OAuth 2.0 client\* will be able to use.

#### `postLogoutRedirectUris` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar

Post logout redirect URIs the new \*OAuth 2.0 client\* will be able to use.

#### `redirectUris` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Redirect URIs the new \*OAuth 2.0 client\* will be able to use.

#### `refreshTokenAbsoluteLifetime` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Maximum lifetime of refresh tokens issued to the new \*OAuth 2.0 client\* in seconds. Must be greater than zero. Defaults to 2147483647 (effectively unlimited) when omitted.

#### `refreshTokenExpirationType` · [`GloOAuthClientRefreshTokenExpirationType`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/glo-oauth-client-refresh-token-expiration-type.md) enum

The expiration type for refresh tokens issued to the new \*OAuth 2.0 client\*. Defaults to SLIDING when omitted.

#### `refreshTokenSlidingLifetime` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Sliding lifetime of refresh tokens issued to the new \*OAuth 2.0 client\* in seconds. Must be greater than zero, and should not exceed the absolute lifetime. Defaults to 31536000 (365 days) when omitted.

#### `requireConsent` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Whether the new \*OAuth 2.0 client\* will require user consent.

#### `requireSecret` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Whether the new \*OAuth 2.0 client\* will need to use a client secret.

#### `scopes` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Scopes the new \*OAuth 2.0 client\* will be able to use.
