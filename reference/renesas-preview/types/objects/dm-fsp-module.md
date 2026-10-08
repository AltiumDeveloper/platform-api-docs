---
title: "DmFspModule"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-fsp-module"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmFspModule

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Firmware Support Package (FSP) module that represents a device interface, including its requirements and provided interfaces.

### Member Of

[`DmDeviceModelAsConfigured`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-model-as-configured.md) object · [`DmFullStackDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-full-stack-device-model.md) object · [`DmRequiresProvidesResolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-requires-provides-resolution.md) object · [`DmStackElement`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-stack-element.md) object

```graphql
type DmFspModule {
  category: String!
  id: String!
  name: String!
  provides: [DmFspProvides!]!
  requires: [DmFspRequires!]!
}
```

### Fields

#### `category` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Category or grouping for this module (for example, communication, timers).

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Unique identifier for the FSP module.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Human-readable name of the FSP module.

#### `provides` · [`[DmFspProvides!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-fsp-provides.md) non-null object

Interfaces that this module provides to other modules.

#### `requires` · [`[DmFspRequires!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-fsp-requires.md) non-null object

Interfaces that this module requires to function.
