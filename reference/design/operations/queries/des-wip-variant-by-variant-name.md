---
title: "desWipVariantByVariantName"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-wip-variant-by-variant-name"
bounded_context: "Design"
kind: "queries"
experimental: false
deprecated: false
---

# desWipVariantByVariantName

Searches a project WIP variant by its name.

### Type

#### [`DesWipVariant`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-wip-variant.md) object

A variant contains a specific configuration of a base design.

```graphql
desWipVariantByVariantName(
  projectId: ID!
  variantName: String!
): DesWipVariant
```

### Arguments

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The project identifier.

#### `variantName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The variant name.
