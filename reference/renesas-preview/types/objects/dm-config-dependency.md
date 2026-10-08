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

### Common Data Model

- [PortConfigurationDependency](https://w3id.org/altium/cdm/deviceModel/PortConfigurationDependency) — A dependency describing how a configuration value maps to GPIO or alternate function usage.
  - IRI: [`https://w3id.org/altium/cdm/deviceModel/PortConfigurationDependency`](https://w3id.org/altium/cdm/deviceModel/PortConfigurationDependency)

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

#### `altRef` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Full alternative reference string used to derive mode/function tokens.

#### `configRef` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Root configuration reference token (e.g., P408).

#### `functionName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Peripheral function name for alternate mode (e.g., TXD, RXD).

#### `gpioMode` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

GPIO mode (None, Input, OutputLow, OutputHigh). Meaningful only when portMode == GPIO.

#### `peripheralInstanceName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Peripheral instance name for alternate function mode (e.g., SCI0).

#### `port` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Port identifier extracted from the configuration reference.

#### `portMode` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Port mode (GPIO or AlternateFunction).
