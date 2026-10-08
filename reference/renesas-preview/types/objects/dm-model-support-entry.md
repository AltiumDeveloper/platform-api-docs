---
title: "DmModelSupportEntry"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-model-support-entry"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmModelSupportEntry

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Support entry for a device or board, showing max instance count and access to the full model.

### Member Of

[`DmInterfaceModelSupport`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-interface-model-support.md) object

```graphql
type DmModelSupportEntry {
  maxInstances: Int!
  model: DmFullStackDeviceModel!
}
```

### Fields

#### `maxInstances` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

Maximum number of candidate instances this model supports for the interface.

#### `model` · [`DmFullStackDeviceModel!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-full-stack-device-model.md) non-null object

Full device or board model.
