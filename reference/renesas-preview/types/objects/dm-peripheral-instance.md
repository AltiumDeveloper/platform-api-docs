---
title: "DmPeripheralInstance"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-instance"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmPeripheralInstance

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

A concrete instance of a peripheral (e.g., SCI0), including available modes.

### Common Data Model

- [PeripheralInstance](https://altiumdeveloper.github.io/cdm/classes/dm_PeripheralInstance/) — A concrete instance of a peripheral (e.g., SCI0), including available modes.

### Member Of

[`DmAddressBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-block.md) object · [`DmPeripheral`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral.md) object · [`DmPeripheralChanges`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-changes.md) object

```graphql
type DmPeripheralInstance {
  addressBlocks: [DmAddressBlock!]!
  channel: String!
  id: String!
  interfaceType: String
  modes: [DmPeripheralMode!]!
  name: String!
  softwareDriverId: String!
  softwareDriverIds: [String!]!
  virtualization: String!
}
```

### Fields

#### `DmPeripheralInstance.addressBlocks` · [`[DmAddressBlock!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-block.md) non-null object renesas-preview

Address block for the instance.

#### `DmPeripheralInstance.channel` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The specific channel number or instance identifier for the hardware peripheral (e.g., '0' for CAN0, '3' for GPT3).

#### `DmPeripheralInstance.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier for the peripheral instance.

#### `DmPeripheralInstance.interfaceType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The logical interface exposed by this peripheral (e.g., UART, I2C, SPI, ADC, PWM).

#### `DmPeripheralInstance.modes` · [`[DmPeripheralMode!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-mode.md) non-null object renesas-preview

Operational modes supported by this peripheral instance.

#### `DmPeripheralInstance.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Display name of the peripheral instance.

#### `DmPeripheralInstance.softwareDriverId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

ID of configured software driver for the peripheral.

#### `DmPeripheralInstance.softwareDriverIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

IDs of available software drivers for the peripheral.

#### `DmPeripheralInstance.virtualization` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Specifies how this peripheral instance is virtualized, indicating whether the instance represents a single, non-virtualized peripheral or a channel-virtualized peripheral where individual functions act as separate interface instances.
