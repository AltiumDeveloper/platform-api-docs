---
title: "dmConfiguredDeviceModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/dm-configured-device-model"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: true
deprecated: false
---

# dmConfiguredDeviceModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

```graphql
dmConfiguredDeviceModel(
  deviceMpn: String!
  sessionId: String!
): DmDeviceModelAsConfigured
```

### Arguments

#### `dmConfiguredDeviceModel.deviceMpn` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `dmConfiguredDeviceModel.sessionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

### Type

#### [`DmDeviceModelAsConfigured`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-model-as-configured.md) object renesas-preview **EXPERIMENTAL**

GraphQL type that exposes the device model as configured, typically after user or tool selections.
