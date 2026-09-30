---
title: "dmFullStackDeviceModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/dm-full-stack-device-model"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: true
deprecated: false
---

# dmFullStackDeviceModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

```graphql
dmFullStackDeviceModel(
  deviceMpn: String!
): DmFullStackDeviceModel
```

### Arguments

#### `dmFullStackDeviceModel.deviceMpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

### Type

#### [`DmFullStackDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-full-stack-device-model.md) object renesas-preview **EXPERIMENTAL**

Root GraphQL type that exposes the full device model, including interfaces, peripherals, and ports.
