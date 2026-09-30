---
title: "DesComponentUpgradeFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-component-upgrade-filter-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesComponentUpgradeFilterInput

Filter input type for component upgrades.

### Member Of

[`DesUpgradeComponentsToLatestFootprintInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-upgrade-components-to-latest-footprint-input.md) input · [`DesUpgradeComponentsToLatestSymbolInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-upgrade-components-to-latest-symbol-input.md) input

```graphql
input DesComponentUpgradeFilterInput {
  comment: DesStringUpgradeOperationFilterInput
  description: DesStringUpgradeOperationFilterInput
  lifeCycleStateName: DesLifecycleStateUpgradeOperationFilterInput
  name: DesStringUpgradeOperationFilterInput
}
```

### Fields

#### `DesComponentUpgradeFilterInput.comment` · [`DesStringUpgradeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-string-upgrade-operation-filter-input.md) input library-management

Filter by the component's comment field.

#### `DesComponentUpgradeFilterInput.description` · [`DesStringUpgradeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-string-upgrade-operation-filter-input.md) input library-management

Filter by the component's description.

#### `DesComponentUpgradeFilterInput.lifeCycleStateName` · [`DesLifecycleStateUpgradeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-lifecycle-state-upgrade-operation-filter-input.md) input library-management

Filter by the name of the component's lifecycle state (e.g., "Validated").

#### `DesComponentUpgradeFilterInput.name` · [`DesStringUpgradeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-string-upgrade-operation-filter-input.md) input library-management

Filter by component name (HRID).
