---
title: "DmConfigDependency"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-config-dependency"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmConfigDependency

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Dependency describing how a configuration value maps to GPIO or alternate function usage.

### Member Of

[`DmConfigEnumValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-config-enum-value.md) object

```graphql
type DmConfigDependency {
  altRef: String!
  configRef: String!
  functionName: String!
  gpioMode: String!
  peripheralInstanceName: String!
  port: String!
  portMode: String!
}
```

### Fields

#### `DmConfigDependency.altRef` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Full alternative reference string used to derive mode/function tokens.

#### `DmConfigDependency.configRef` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Root configuration reference token (e.g., P408).

#### `DmConfigDependency.functionName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Peripheral function name for alternate mode (e.g., TXD, RXD).

#### `DmConfigDependency.gpioMode` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

GPIO mode (None, Input, OutputLow, OutputHigh). Meaningful only when portMode == GPIO.

#### `DmConfigDependency.peripheralInstanceName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Peripheral instance name for alternate function mode (e.g., SCI0).

#### `DmConfigDependency.port` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Port identifier extracted from the configuration reference.

#### `DmConfigDependency.portMode` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Port mode (GPIO or AlternateFunction).
