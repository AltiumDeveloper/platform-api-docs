---
title: "SysSdmDmPortConfigurationDependency"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-port-configuration-dependency"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysSdmDmPortConfigurationDependency

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`SysSdmDmPortConfigurationEnumValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-port-configuration-enum-value.md) object

```graphql
type SysSdmDmPortConfigurationDependency {
  altRef: String
  configRef: String!
  functionName: String
  gpioMode: SysSdmDmGpioMode
  peripheralInstanceName: String
  port: String
  portMode: SysSdmDmPortMode
}
```

### Fields

#### `altRef` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `configRef` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `functionName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `gpioMode` · [`SysSdmDmGpioMode`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/enums/sys-sdm-dm-gpio-mode.md) enum

#### `peripheralInstanceName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `port` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `portMode` · [`SysSdmDmPortMode`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/enums/sys-sdm-dm-port-mode.md) enum
