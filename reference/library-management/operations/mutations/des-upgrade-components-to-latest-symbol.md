---
title: "desUpgradeComponentsToLatestSymbol"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-upgrade-components-to-latest-symbol"
bounded_context: "Library Management"
kind: "mutations"
experimental: false
deprecated: false
---

# desUpgradeComponentsToLatestSymbol

Upgrades components to use the latest symbol revision. This operation updates the link to the symbol and does not create new component revisions.

### Type

#### [`DesUpgradeComponentsToLatestSymbolPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-upgrade-components-to-latest-symbol-payload.md) object

Payload for upgrading components to use the latest symbol revision.

```graphql
desUpgradeComponentsToLatestSymbol(
  input: DesUpgradeComponentsToLatestSymbolInput!
): DesUpgradeComponentsToLatestSymbolPayload!
```

### Arguments

#### `input` · [`DesUpgradeComponentsToLatestSymbolInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-upgrade-components-to-latest-symbol-input.md) non-null input
