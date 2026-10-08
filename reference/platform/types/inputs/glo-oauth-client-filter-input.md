---
title: "GloOAuthClientFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-oauth-client-filter-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloOAuthClientFilterInput

Represents an \*OAuth 2.0 client\*.

### Member Of

[`GloAppFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-filter-input.md) input · [`GloOAuthClientFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-oauth-client-filter-input.md) input

```graphql
input GloOAuthClientFilterInput {
  and: [GloOAuthClientFilterInput!]
  clientId: StringOperationFilterInput
  or: [GloOAuthClientFilterInput!]
}
```

### Fields

#### `and` · [`[GloOAuthClientFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-oauth-client-filter-input.md) list input

#### `clientId` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The client identifier for this \*OAuth 2.0 client\*.

#### `or` · [`[GloOAuthClientFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-oauth-client-filter-input.md) list input
