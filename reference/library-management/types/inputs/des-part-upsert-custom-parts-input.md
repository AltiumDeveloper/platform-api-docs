---
title: "DesPartUpsertCustomPartsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-upsert-custom-parts-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartUpsertCustomPartsInput

Represents the input for upserting custom parts.

### Member Of

[`desPartUpsertCustomParts`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-upsert-custom-parts.md) mutation

```graphql
input DesPartUpsertCustomPartsInput {
  parts: [DesPartCustomPartDataInput!]!
  partSourceGuid: String!
}
```

### Fields

#### `parts` · [`[DesPartCustomPartDataInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-custom-part-data-input.md) non-null input

A collection of parts to upsert.

#### `partSourceGuid` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the part source.
