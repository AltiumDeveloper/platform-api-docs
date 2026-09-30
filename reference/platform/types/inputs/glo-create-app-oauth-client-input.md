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

#### `GloCreateAppOAuthClientInput.accessTokenLifetime` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Maximum lifetime of access tokens issued to the new \*OAuth 2.0 client\* in seconds. Must be greater than zero. Defaults to 14400 (4 hours) when omitted.

#### `GloCreateAppOAuthClientInput.clientId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Client identifier of the new \*OAuth 2.0 client\*.

#### `GloCreateAppOAuthClientInput.grantTypes` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Grant types the new \*OAuth 2.0 client\* will be able to use.

#### `GloCreateAppOAuthClientInput.postLogoutRedirectUris` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Post logout redirect URIs the new \*OAuth 2.0 client\* will be able to use.

#### `GloCreateAppOAuthClientInput.redirectUris` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Redirect URIs the new \*OAuth 2.0 client\* will be able to use.

#### `GloCreateAppOAuthClientInput.refreshTokenAbsoluteLifetime` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Maximum lifetime of refresh tokens issued to the new \*OAuth 2.0 client\* in seconds. Must be greater than zero. Defaults to 2147483647 (effectively unlimited) when omitted.

#### `GloCreateAppOAuthClientInput.refreshTokenExpirationType` · [`GloOAuthClientRefreshTokenExpirationType`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/glo-oauth-client-refresh-token-expiration-type.md) enum platform

The expiration type for refresh tokens issued to the new \*OAuth 2.0 client\*. Defaults to SLIDING when omitted.

#### `GloCreateAppOAuthClientInput.refreshTokenSlidingLifetime` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Sliding lifetime of refresh tokens issued to the new \*OAuth 2.0 client\* in seconds. Must be greater than zero, and should not exceed the absolute lifetime. Defaults to 31536000 (365 days) when omitted.

#### `GloCreateAppOAuthClientInput.requireConsent` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Whether the new \*OAuth 2.0 client\* will require user consent.

#### `GloCreateAppOAuthClientInput.requireSecret` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Whether the new \*OAuth 2.0 client\* will need to use a client secret.

#### `GloCreateAppOAuthClientInput.scopes` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Scopes the new \*OAuth 2.0 client\* will be able to use.
