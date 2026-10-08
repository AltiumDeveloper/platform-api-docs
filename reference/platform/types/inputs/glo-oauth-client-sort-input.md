---
title: "GloOAuthClientSortInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-oauth-client-sort-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloOAuthClientSortInput

Represents an \*OAuth 2.0 client\*.

### Member Of

[`GloAppSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-sort-input.md) input

```graphql
input GloOAuthClientSortInput {
  clientId: SortEnumType
}
```

### Fields

#### `clientId` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The client identifier for this \*OAuth 2.0 client\*.
