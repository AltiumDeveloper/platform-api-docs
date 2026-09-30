---
title: "DmInterfaceTypeModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-interface-type-model"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmInterfaceTypeModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

A supported interface (port) type with display metadata. Source of truth for the interface types the product supports.

### Returned By

[`dmInterfaceTypeModels`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/dm-interface-type-models.md) query

### Member Of

[`DmInterfaceSummary`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-interface-summary.md) object

```graphql
type DmInterfaceTypeModel {
  aliases: [String!]!
  description: String!
  key: String!
  label: String!
  shortLabel: String!
  userSelectable: Boolean!
}
```

### Fields

#### `DmInterfaceTypeModel.aliases` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Legacy or display-name variants that resolve to this interface type, for client migration.

#### `DmInterfaceTypeModel.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

One-sentence description of the interface type.

#### `DmInterfaceTypeModel.key` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Canonical lowercase interface-type key (e.g. uart, spi, storage, power). Matches interfaceType used in dmInterfaceSupportSummary and SDM.

#### `DmInterfaceTypeModel.label` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Full human-readable name.

#### `DmInterfaceTypeModel.shortLabel` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Compact display code shown on chips and menus (e.g. UART, SD/MMC).

#### `DmInterfaceTypeModel.userSelectable` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Whether users may add this interface type (controls Add Port menu visibility).
