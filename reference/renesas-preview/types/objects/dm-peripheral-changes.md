---
title: "DmPeripheralChanges"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-changes"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmPeripheralChanges

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Changes in peripheral instances between incoming SDM and resolved model.

### Member Of

[`DmUpdaterSummary`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-updater-summary.md) object

```graphql
type DmPeripheralChanges {
  added: [String!]!
  addedInstances: [DmPeripheralInstance!]!
  modified: [String!]!
  modifiedInstances: [DmPeripheralInstance!]!
  removed: [String!]!
}
```

### Fields

#### `DmPeripheralChanges.added` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

IDs of peripheral instances present in the resolved model but not present in the incoming SDM device model.

#### `DmPeripheralChanges.addedInstances` · [`[DmPeripheralInstance!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-instance.md) non-null object renesas-preview

Peripheral instance payloads that were added in the resolved model compared to the incoming SDM device model.

#### `DmPeripheralChanges.modified` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

IDs of peripheral instances present in both models where the selected pin configuration changed.

#### `DmPeripheralChanges.modifiedInstances` · [`[DmPeripheralInstance!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-instance.md) non-null object renesas-preview

Peripheral instance payloads that exist in both models but have changed pin configuration.

#### `DmPeripheralChanges.removed` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

IDs of peripheral instances present in the incoming SDM device model but not present in the resolved model.
