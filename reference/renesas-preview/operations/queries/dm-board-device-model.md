---
title: "dmBoardDeviceModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/dm-board-device-model"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: true
deprecated: false
---

# dmBoardDeviceModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

A board model (an MCU as soldered onto a specific eval kit) by board name.

### Type

#### [`DmFullStackDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-full-stack-device-model.md) object **EXPERIMENTAL**

Root GraphQL type that exposes the full device model, including interfaces, peripherals, and ports.

```graphql
dmBoardDeviceModel(
  boardName: String!
): DmFullStackDeviceModel
```

### Arguments

#### `boardName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
