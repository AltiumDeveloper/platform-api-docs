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

```graphql
desUpgradeComponentsToLatestSymbol(
  input: DesUpgradeComponentsToLatestSymbolInput!
): DesUpgradeComponentsToLatestSymbolPayload!
```

### Arguments

#### `desUpgradeComponentsToLatestSymbol.input` · [`DesUpgradeComponentsToLatestSymbolInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-upgrade-components-to-latest-symbol-input.md) non-null input library-management

### Type

#### [`DesUpgradeComponentsToLatestSymbolPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-upgrade-components-to-latest-symbol-payload.md) object library-management

Payload for upgrading components to use the latest symbol revision.
