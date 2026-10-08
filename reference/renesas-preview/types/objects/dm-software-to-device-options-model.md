---
title: "DmSoftwareToDeviceOptionsModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-software-to-device-options-model"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmSoftwareToDeviceOptionsModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Options describing how software requirements map onto device interfaces.

### Member Of

[`DmFullStackDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-full-stack-device-model.md) object

```graphql
type DmSoftwareToDeviceOptionsModel {
  softwareToDeviceElements: [DmRequiresProvidesResolution!]!
}
```

### Fields

#### `softwareToDeviceElements` · [`[DmRequiresProvidesResolution!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-requires-provides-resolution.md) non-null object

Collection of resolutions linking software requirements to device-provided interfaces.
