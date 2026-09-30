---
title: "DesPartRemoveCustomPartsInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-remove-custom-parts-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartRemoveCustomPartsInput

Represents the input for removing custom parts.

### Member Of

[`desPartRemoveCustomParts`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-remove-custom-parts.md) mutation

```graphql
input DesPartRemoveCustomPartsInput {
  partIds: [DesPartManufacturerPartIdWithLastSyncTimeInput!]!
  partSourceGuid: String!
}
```

### Fields

#### `DesPartRemoveCustomPartsInput.partIds` · [`[DesPartManufacturerPartIdWithLastSyncTimeInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-manufacturer-part-id-with-last-sync-time-input.md) non-null input library-management

The manufacturer part identifiers with their last synchronization times.

#### `DesPartRemoveCustomPartsInput.partSourceGuid` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The unique identifier of the part source.
