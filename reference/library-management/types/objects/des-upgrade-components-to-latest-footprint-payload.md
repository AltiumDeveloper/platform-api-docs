---
title: "DesUpgradeComponentsToLatestFootprintPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-upgrade-components-to-latest-footprint-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpgradeComponentsToLatestFootprintPayload

Payload for upgrading components to use the latest footprint revision.

### Returned By

[`desUpgradeComponentsToLatestFootprint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-upgrade-components-to-latest-footprint.md) mutation

```graphql
type DesUpgradeComponentsToLatestFootprintPayload {
  errors: [DesPayloadError!]!
  failedComponentIds: [ID!]!
  failedCount: Int!
  totalProcessed: Int!
  upgradedComponentIds: [ID!]!
  upgradedCount: Int!
}
```

### Fields

#### `DesUpgradeComponentsToLatestFootprintPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.

#### `DesUpgradeComponentsToLatestFootprintPayload.failedComponentIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

List of component identifiers that failed to upgrade.

#### `DesUpgradeComponentsToLatestFootprintPayload.failedCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The number of components that failed to upgrade.

#### `DesUpgradeComponentsToLatestFootprintPayload.totalProcessed` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The total number of components that were processed.

#### `DesUpgradeComponentsToLatestFootprintPayload.upgradedComponentIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

List of component identifiers that were upgraded.

#### `DesUpgradeComponentsToLatestFootprintPayload.upgradedCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The number of components that were successfully upgraded.
