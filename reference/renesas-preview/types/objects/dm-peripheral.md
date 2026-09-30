---
title: "DmPeripheral"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmPeripheral

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

A single peripheral definition, including its instances and properties.

### Common Data Model

- [Peripheral](https://altiumdeveloper.github.io/cdm/classes/dm_Peripheral/) — A single peripheral definition, including its instances and properties.

### Member Of

[`DmAddressSegment`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-segment.md) object · [`DmPeripheralModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-model.md) object

```graphql
type DmPeripheral {
  id: String!
  name: String!
  peripheralInstances: [DmPeripheralInstance!]!
  peripheralProperties: [DmPeripheralProperty!]!
}
```

### Fields

#### `DmPeripheral.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Unique identifier for the peripheral (e.g., sci, gpt).

#### `DmPeripheral.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Display name of the peripheral.

#### `DmPeripheral.peripheralInstances` · [`[DmPeripheralInstance!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-instance.md) non-null object renesas-preview

Instances of this peripheral present on the device (e.g., SCI0, GPT2).

#### `DmPeripheral.peripheralProperties` · [`[DmPeripheralProperty!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-property.md) non-null object renesas-preview

Additional properties or metadata associated with the peripheral.
