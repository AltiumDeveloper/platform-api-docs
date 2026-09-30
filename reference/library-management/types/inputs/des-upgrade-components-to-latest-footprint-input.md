---
title: "DesUpgradeComponentsToLatestFootprintInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-upgrade-components-to-latest-footprint-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpgradeComponentsToLatestFootprintInput

Input for upgrading components to use the latest footprint revision.

### Member Of

[`desUpgradeComponentsToLatestFootprint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-upgrade-components-to-latest-footprint.md) mutation

```graphql
input DesUpgradeComponentsToLatestFootprintInput {
  componentFilter: DesComponentUpgradeFilterInput
  footprintId: ID!
}
```

### Fields

#### `DesUpgradeComponentsToLatestFootprintInput.componentFilter` · [`DesComponentUpgradeFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-upgrade-filter-input.md) input library-management

Optional structured filter to limit which components are upgraded.

#### `DesUpgradeComponentsToLatestFootprintInput.footprintId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The footprint identifier whose components should be upgraded.
