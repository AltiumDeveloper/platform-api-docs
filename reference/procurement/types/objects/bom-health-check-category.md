---
title: "BomHealthCheckCategory"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-health-check-category"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomHealthCheckCategory

Information about the health check category (e.g., \*Supply Chain\*, \*Manufacturer Lifecycles\*).

### Member Of

[`BomHealthCheck`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-health-check.md) object

```graphql
type BomHealthCheckCategory {
  categoryId: String!
  name: String!
}
```

### Fields

#### `BomHealthCheckCategory.categoryId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ID of the category.

#### `BomHealthCheckCategory.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the category.
