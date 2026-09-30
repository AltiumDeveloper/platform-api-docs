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

#### `DmPinAssignment.display` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Display representation of the pin assignment.

#### `DmPinAssignment.functionName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Logical pin function name (e.g., TXD, RXD).

#### `DmPinAssignment.portName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Mapped physical port name.

#### `DmPinAssignment.presetFunctionName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Board-level preset function name for this port, if any. Useful for debugging solver weight behaviour.
