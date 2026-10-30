---
title: "SysSdmDmPeripheralConfiguration"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-peripheral-configuration"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysSdmDmPeripheralConfiguration

### Member Of

[`SysSdmDmPeripheralMode`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-peripheral-mode.md) object

```graphql
type SysSdmDmPeripheralConfiguration {
  id: String!
  parameters: [SysSdmDmPeripheralParameter!]
  pinConfigs: [SysSdmDmPeripheralPinConfig!]
  pinDependencyConfigs: [SysSdmDmPeripheralPinDependencyConfig!]
}
```

### Fields

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `parameters` · [`[SysSdmDmPeripheralParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-peripheral-parameter.md) list object

#### `pinConfigs` · [`[SysSdmDmPeripheralPinConfig!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-peripheral-pin-config.md) list object

#### `pinDependencyConfigs` · [`[SysSdmDmPeripheralPinDependencyConfig!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-dm-peripheral-pin-dependency-config.md) list object
