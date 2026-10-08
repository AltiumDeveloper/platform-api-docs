---
title: "DmDeviceToPeripheralOptionsModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-to-peripheral-options-model"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmDeviceToPeripheralOptionsModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Options describing how device interfaces map onto physical peripherals.

### Member Of

[`DmFullStackDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-full-stack-device-model.md) object

```graphql
type DmDeviceToPeripheralOptionsModel {
  deviceToPeripheralElements: [DmRequiresProvidesResolution!]!
}
```

### Fields

#### `deviceToPeripheralElements` · [`[DmRequiresProvidesResolution!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-requires-provides-resolution.md) non-null object

Collection of resolutions linking device requirements to specific peripherals.
