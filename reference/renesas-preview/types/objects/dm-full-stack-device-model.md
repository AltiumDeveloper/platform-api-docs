---
title: "DmFullStackDeviceModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-full-stack-device-model"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmFullStackDeviceModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Root GraphQL type that exposes the full device model, including interfaces, peripherals, and ports.

### Common Data Model

- [FullStackDeviceModel](https://altiumdeveloper.github.io/cdm/classes/dm_FullStackDeviceModel/) — A digital twin of an embedded hardware device. It exposes the full device model, including interfaces, peripherals, and ports.
  - GRID: `grid:global::device-model:fullstack-dm/{id}`

### Returned By

[`dmBoardDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/dm-board-device-model.md) query · [`dmFullStackDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/dm-full-stack-device-model.md) query · [`dmFullStackDeviceModelAllDevices`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/dm-full-stack-device-model-all-devices.md) query

### Member Of

[`DmModelSupportEntry`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-model-support-entry.md) object

```graphql
type DmFullStackDeviceModel {
  board: DmDeviceBoard
  deviceAddressMap: DmAddressMapModel
  deviceInterfaces: [DmFspModule!]!
  deviceMpn: String!
  devicePeripherals: DmPeripheralModel
  devicePorts: DmPortModel
  deviceToPeripheralOptions: DmDeviceToPeripheralOptionsModel
  familyPart: DmFamilyPart
  softwareToDeviceOptions: DmSoftwareToDeviceOptionsModel
}
```

### Fields

#### `DmFullStackDeviceModel.board` · [`DmDeviceBoard`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-board.md) object renesas-preview

An evaluation kit or specific hardware design that the MCU is soldered onto

#### `DmFullStackDeviceModel.deviceAddressMap` · [`DmAddressMapModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-map-model.md) object renesas-preview

Address map of the device, including segments and blocks.

#### `DmFullStackDeviceModel.deviceInterfaces` · [`[DmFspModule!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-fsp-module.md) non-null object renesas-preview

Collection of Flexible Software Package (FSP) modules that represent device interfaces.

#### `DmFullStackDeviceModel.deviceMpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Manufacturer part number (MPN) that uniquely identifies the device.

#### `DmFullStackDeviceModel.devicePeripherals` · [`DmPeripheralModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-model.md) object renesas-preview

All peripherals available on the device, including their instances and properties.

#### `DmFullStackDeviceModel.devicePorts` · [`DmPortModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-model.md) object renesas-preview

I/O port model for the device, including functions, configurations, and connections.

#### `DmFullStackDeviceModel.deviceToPeripheralOptions` · [`DmDeviceToPeripheralOptionsModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-to-peripheral-options-model.md) object renesas-preview

Mappings from device interfaces to peripherals that can fulfill those interfaces.

#### `DmFullStackDeviceModel.familyPart` · [`DmFamilyPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-family-part.md) object renesas-preview

Family part details for the device.

#### `DmFullStackDeviceModel.softwareToDeviceOptions` · [`DmSoftwareToDeviceOptionsModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-software-to-device-options-model.md) object renesas-preview

Mappings that show how software requirements can be satisfied by device-provided interfaces.
