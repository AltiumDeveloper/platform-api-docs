---
title: "DmDependencyPinConfig"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-dependency-pin-config"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmDependencyPinConfig

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Pin dependecy to port mapping entry within an operation mode.

### Member Of

[`DmOpMode`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-op-mode.md) object

```graphql
type DmDependencyPinConfig {
  display: String!
  pinDependencyName: String!
  pinDependencyValue: String!
}
```

### Fields

#### `DmDependencyPinConfig.display` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Display representation of the pin mapping.

#### `DmDependencyPinConfig.pinDependencyName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Pin dependency name id.

#### `DmDependencyPinConfig.pinDependencyValue` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Pin value of pin dependency name id.
