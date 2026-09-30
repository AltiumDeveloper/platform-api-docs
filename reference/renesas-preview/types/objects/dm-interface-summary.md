---
title: "DmInterfaceSummary"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-interface-summary"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmInterfaceSummary

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Summary of a single generic interface (e.g., UART, PWM) showing device and board support details.

### Member Of

[`DmInterfaceSupportSummary`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-interface-support-summary.md) object

```graphql
type DmInterfaceSummary {
  boards: DmInterfaceModelSupport!
  devices: DmInterfaceModelSupport!
  interfaceType: String!
  interfaceTypeModel: DmInterfaceTypeModel
}
```

### Fields

#### `DmInterfaceSummary.boards` · [`DmInterfaceModelSupport!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-interface-model-support.md) non-null object renesas-preview

Board support details for this interface.

#### `DmInterfaceSummary.devices` · [`DmInterfaceModelSupport!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-interface-model-support.md) non-null object renesas-preview

Device support details for this interface.

#### `DmInterfaceSummary.interfaceType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Generic interface type identifier (e.g., uart, pwm, adc).

#### `DmInterfaceSummary.interfaceTypeModel` · [`DmInterfaceTypeModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-interface-type-model.md) object renesas-preview

Dictionary metadata for this interface type (label, description, user-selectable, aliases). Null if absent from the dictionary.
