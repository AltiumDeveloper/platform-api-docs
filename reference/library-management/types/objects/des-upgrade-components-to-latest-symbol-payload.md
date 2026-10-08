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

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.

#### `failedComponentIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

List of component identifiers that failed to upgrade.

#### `failedCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The number of components that failed to upgrade.

#### `totalProcessed` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The total number of components that were processed.

#### `upgradedComponentIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

List of component identifiers that were upgraded.

#### `upgradedCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The number of components that were successfully upgraded.
