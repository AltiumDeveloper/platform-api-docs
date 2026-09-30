---
title: "DesPartManufacturerPartIdWithLastSyncTimeInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-manufacturer-part-id-with-last-sync-time-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartManufacturerPartIdWithLastSyncTimeInput

Represents the part manufacturer name and part number with last sync time in part source.

### Member Of

[`DesPartRemoveCustomPartsInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-remove-custom-parts-input.md) input

```graphql
input DesPartManufacturerPartIdWithLastSyncTimeInput {
  lastSyncTime: DateTime!
  manufacturerName: String!
  mpn: String!
}
```

### Fields

#### `DesPartManufacturerPartIdWithLastSyncTimeInput.lastSyncTime` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The last synchronization time.

#### `DesPartManufacturerPartIdWithLastSyncTimeInput.manufacturerName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the manufacturer.

#### `DesPartManufacturerPartIdWithLastSyncTimeInput.mpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The manufacturer part number.
