---
title: "DmDeviceModelAsConfigured"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-model-as-configured"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmDeviceModelAsConfigured

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

GraphQL type that exposes the device model as configured, typically after user or tool selections.

### Common Data Model

- [ConfiguredDeviceModel](https://w3id.org/altium/cdm/deviceModel/ConfiguredDeviceModel) — A digital twin of an embedded hardware device as configured for a specific use-case. It exposes the device model filtered to specific device configuration.
  - IRI: [`https://w3id.org/altium/cdm/deviceModel/ConfiguredDeviceModel`](https://w3id.org/altium/cdm/deviceModel/ConfiguredDeviceModel)

### Returned By

[`dmConfiguredDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/dm-configured-device-model.md) query · [`dmConfiguredDeviceModelAllDevices`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/dm-configured-device-model-all-devices.md) query

### Member Of

[`DmExecuteDeviceExtractionFromConfigurationPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-execute-device-extraction-from-configuration-payload.md) object · [`DmExecuteDeviceExtractionFromConfigurationUrlPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-execute-device-extraction-from-configuration-url-payload.md) object · [`DmResolverResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-resolver-result.md) object · [`SftDevCfgDeviceConfigurationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration-revision.md) object

```graphql
type DmDeviceModelAsConfigured {
  board: DmDeviceBoard
  deviceInterfaces: [DmFspModule!]!
  deviceMpn: String!
  devicePeripherals: DmPeripheralModel
  devicePorts(
    includeBoardFixedPorts: Boolean! = false
  ): DmPortModel
  familyPart: DmFamilyPart
  softwareStack: DmStackModel
}
```

### Fields

#### `board` · [`DmDeviceBoard`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-board.md) object

An evaluation kit or specific hardware design that the MCU is soldered onto

#### `deviceInterfaces` · [`[DmFspModule!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-fsp-module.md) non-null object

Collection of Flexible Software Package (FSP) modules that represent device interfaces.

#### `deviceMpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Device part number.

#### `devicePeripherals` · [`DmPeripheralModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-model.md) object

Peripherals as configured for the device.

#### `devicePorts` · [`DmPortModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-model.md) object

Ports as configured for the device.

##### `includeBoardFixedPorts` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

#### `familyPart` · [`DmFamilyPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-family-part.md) object

Family part details for the device.

#### `softwareStack` · [`DmStackModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-stack-model.md) object

Software stack as configured for the device.
