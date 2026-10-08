---
title: "DmPinAssignment"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-pin-assignment"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmPinAssignment

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Pin mapping entry from function name to a concrete port.

### Member Of

[`DmInstanceSelection`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-instance-selection.md) object

```graphql
type DmPinAssignment {
  display: String!
  functionName: String!
  portName: String!
  presetFunctionName: String
}
```

### Fields

#### `display` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Display representation of the pin assignment.

#### `functionName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Logical pin function name (e.g., TXD, RXD).

#### `portName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Mapped physical port name.

#### `presetFunctionName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Board-level preset function name for this port, if any. Useful for debugging solver weight behaviour.
