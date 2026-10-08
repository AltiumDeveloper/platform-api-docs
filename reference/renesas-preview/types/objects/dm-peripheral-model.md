---
title: "DmPeripheralModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-model"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmPeripheralModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Peripheral model for the device, including all available peripherals.

### Member Of

[`DmDeviceModelAsConfigured`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-model-as-configured.md) object · [`DmFullStackDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-full-stack-device-model.md) object

```graphql
type DmPeripheralModel {
  peripherals: [DmPeripheral!]!
}
```

### Fields

#### `peripherals` · [`[DmPeripheral!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral.md) non-null object

List of peripheral definitions available on the device.
