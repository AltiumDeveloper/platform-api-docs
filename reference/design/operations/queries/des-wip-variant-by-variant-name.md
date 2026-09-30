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

```graphql
desWipVariantByVariantName(
  projectId: ID!
  variantName: String!
): DesWipVariant
```

### Arguments

#### `desWipVariantByVariantName.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The project identifier.

#### `desWipVariantByVariantName.variantName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The variant name.

### Type

#### [`DesWipVariant`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-wip-variant.md) object design

A variant contains a specific configuration of a base design.
