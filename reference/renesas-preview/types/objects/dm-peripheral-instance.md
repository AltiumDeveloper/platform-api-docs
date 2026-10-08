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

- [PeripheralInstance](https://w3id.org/altium/cdm/deviceModel/PeripheralInstance) — A concrete instance of a peripheral (e.g., SCI0), including available modes.
  - IRI: [`https://w3id.org/altium/cdm/deviceModel/PeripheralInstance`](https://w3id.org/altium/cdm/deviceModel/PeripheralInstance)

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

#### `addressBlocks` · [`[DmAddressBlock!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-block.md) non-null object

Address block for the instance.

#### `channel` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The specific channel number or instance identifier for the hardware peripheral (e.g., '0' for CAN0, '3' for GPT3).

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier for the peripheral instance.

#### `interfaceType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The logical interface exposed by this peripheral (e.g., UART, I2C, SPI, ADC, PWM).

#### `modes` · [`[DmPeripheralMode!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-mode.md) non-null object

Operational modes supported by this peripheral instance.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Display name of the peripheral instance.

#### `softwareDriverId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of configured software driver for the peripheral.

#### `softwareDriverIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

IDs of available software drivers for the peripheral.

#### `virtualization` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Specifies how this peripheral instance is virtualized, indicating whether the instance represents a single, non-virtualized peripheral or a channel-virtualized peripheral where individual functions act as separate interface instances.
