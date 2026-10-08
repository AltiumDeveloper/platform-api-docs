---
title: "desReleaseVariantByVariantName"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-release-variant-by-variant-name"
bounded_context: "Design"
kind: "queries"
experimental: false
deprecated: false
---

# desReleaseVariantByVariantName

Searches a project release variant by its name.

### Type

#### [`DesReleaseVariant`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release-variant.md) object

A variant contains a specific configuration of a base design.

```graphql
desReleaseVariantByVariantName(
  releaseId: ID!
  variantName: String!
): DesReleaseVariant
```

### Arguments

#### `releaseId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The project release identifier.

#### `variantName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The variant name.
