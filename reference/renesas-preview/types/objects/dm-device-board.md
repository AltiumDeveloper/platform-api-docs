---
title: "DmDeviceBoard"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-board"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmDeviceBoard

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents an available device board for a specific device model.

### Member Of

[`DmDeviceModelAsConfigured`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-model-as-configured.md) object · [`DmFeasibleDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-feasible-device-model.md) object · [`DmFullStackDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-full-stack-device-model.md) object

```graphql
type DmDeviceBoard {
  isCompatible: Boolean!
  name: String!
}
```

### Fields

#### `isCompatible` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates if the device board is compatible with the device model.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the board (e.g., EK-RA4M3).
