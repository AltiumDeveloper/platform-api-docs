---
title: "BomHealthCheckProvider"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-health-check-provider"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomHealthCheckProvider

Information about the health check provider.

### Member Of

[`BomHealthCheck`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-health-check.md) object

```graphql
type BomHealthCheckProvider {
  name: String!
  providerId: String!
}
```

### Fields

#### `BomHealthCheckProvider.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the provider.

#### `BomHealthCheckProvider.providerId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ID of the provider.
