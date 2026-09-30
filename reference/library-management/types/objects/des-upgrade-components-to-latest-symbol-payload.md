---
title: "DesUpgradeComponentsToLatestSymbolPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-upgrade-components-to-latest-symbol-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpgradeComponentsToLatestSymbolPayload

Payload for upgrading components to use the latest symbol revision.

### Returned By

[`desUpgradeComponentsToLatestSymbol`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-upgrade-components-to-latest-symbol.md) mutation

```graphql
type DesUpgradeComponentsToLatestSymbolPayload {
  errors: [DesPayloadError!]!
  failedComponentIds: [ID!]!
  failedCount: Int!
  totalProcessed: Int!
  upgradedComponentIds: [ID!]!
  upgradedCount: Int!
}
```

### Fields

#### `DesUpgradeComponentsToLatestSymbolPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.

#### `DesUpgradeComponentsToLatestSymbolPayload.failedComponentIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

List of component identifiers that failed to upgrade.

#### `DesUpgradeComponentsToLatestSymbolPayload.failedCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The number of components that failed to upgrade.

#### `DesUpgradeComponentsToLatestSymbolPayload.totalProcessed` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The total number of components that were processed.

#### `DesUpgradeComponentsToLatestSymbolPayload.upgradedComponentIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

List of component identifiers that were upgraded.

#### `DesUpgradeComponentsToLatestSymbolPayload.upgradedCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The number of components that were successfully upgraded.
