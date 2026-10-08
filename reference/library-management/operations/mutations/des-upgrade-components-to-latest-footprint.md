---
title: "desUpgradeComponentsToLatestFootprint"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-upgrade-components-to-latest-footprint"
bounded_context: "Library Management"
kind: "mutations"
experimental: false
deprecated: false
---

# desUpgradeComponentsToLatestFootprint

Upgrades components to use the latest footprint revision. This operation updates the link to the footprint and does not create new component revisions.

### Type

#### [`DesUpgradeComponentsToLatestFootprintPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-upgrade-components-to-latest-footprint-payload.md) object

Payload for upgrading components to use the latest footprint revision.

```graphql
desUpgradeComponentsToLatestFootprint(
  input: DesUpgradeComponentsToLatestFootprintInput!
): DesUpgradeComponentsToLatestFootprintPayload!
```

### Arguments

#### `input` · [`DesUpgradeComponentsToLatestFootprintInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-upgrade-components-to-latest-footprint-input.md) non-null input
