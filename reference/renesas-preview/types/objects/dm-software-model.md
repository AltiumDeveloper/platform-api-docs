---
title: "DmSoftwareModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-software-model"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmSoftwareModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

The software model for a device, including the device part number, its ports, and associated software components such as middleware and drivers.

### Returned By

[`dmSoftwareModelFromConfigurationXml`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/renesas-preview/operations/queries/dm-software-model-from-configuration-xml.md) query

```graphql
type DmSoftwareModel {
  deviceMpn: String!
  ports: [DmRequestedPeripheral!]!
  softwareComponents: [DmSoftwareComponent!]!
}
```

### Fields

#### `deviceMpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Device part number.

#### `ports` · [`[DmRequestedPeripheral!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-requested-peripheral.md) non-null object

The ports (e.g. UART, I2C) defined in the configuration.xml for this device.

#### `softwareComponents` · [`[DmSoftwareComponent!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-software-component.md) non-null object

The software components (e.g. middleware, drivers) defined in
