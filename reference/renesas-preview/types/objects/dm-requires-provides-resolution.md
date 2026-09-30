---
title: "DmRequiresProvidesResolution"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-requires-provides-resolution"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmRequiresProvidesResolution

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Resolution details mapping FSP module requirements to provided interfaces.

### Member Of

[`DmDeviceToPeripheralOptionsModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-to-peripheral-options-model.md) object · [`DmSoftwareToDeviceOptionsModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-software-to-device-options-model.md) object

```graphql
type DmRequiresProvidesResolution {
  requiresModule: DmFspModule!
  requiresToProvidesMapping: [DmRequiresProvidesMapping!]!
}
```

### Fields

#### `DmRequiresProvidesResolution.requiresModule` · [`DmFspModule!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-fsp-module.md) non-null object renesas-preview

The FSP module that declares the interface requirements.

#### `DmRequiresProvidesResolution.requiresToProvidesMapping` · [`[DmRequiresProvidesMapping!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-requires-provides-mapping.md) non-null object renesas-preview

Per-requirement mapping that shows which provided interface satisfies it, if any.
