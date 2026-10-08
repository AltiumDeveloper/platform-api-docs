---
title: "DesUpgradeComponentsToLatestSymbolInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-upgrade-components-to-latest-symbol-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpgradeComponentsToLatestSymbolInput

Input for upgrading components to use the latest symbol revision.

### Member Of

[`desUpgradeComponentsToLatestSymbol`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-upgrade-components-to-latest-symbol.md) mutation

```graphql
input DesUpgradeComponentsToLatestSymbolInput {
  componentFilter: DesComponentUpgradeFilterInput
  symbolId: ID!
}
```

### Fields

#### `componentFilter` · [`DesComponentUpgradeFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-upgrade-filter-input.md) input

Optional structured filter to limit which components are upgraded.

#### `symbolId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The symbol identifier whose components should be upgraded.
