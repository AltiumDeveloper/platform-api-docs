---
title: "DmAddressBlock"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-block"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmAddressBlock

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Address block with start, size, and optional registers and peripherals.

### Common Data Model

- [AddressBlock](https://w3id.org/altium/cdm/deviceModel/AddressBlock) — Address block with start, size, and optional registers and peripherals.
  - IRI: [`https://w3id.org/altium/cdm/deviceModel/AddressBlock`](https://w3id.org/altium/cdm/deviceModel/AddressBlock)

### Member Of

[`DmAddressSegment`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-segment.md) object · [`DmPeripheralInstance`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-instance.md) object

```graphql
type DmAddressBlock {
  dataSource: String!
  description: String!
  memories: [DmAmMemory!]!
  name: String!
  peripheralInstance: DmPeripheralInstance
  registers: [DmAmRegister!]!
  size: Long!
  sizeHex: String!
  startAddress: Long!
  startAddressHex: String!
  type: String!
  upperAddress: Long!
  upperAddressHex: String!
}
```

### Fields

#### `dataSource` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Source(s) of this block (e.g., RZone, SVD, PinCfg).

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Description of the block.

#### `memories` · [`[DmAmMemory!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-memory.md) non-null object

Memory entries contained within this block.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the block.

#### `peripheralInstance` · [`DmPeripheralInstance`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-instance.md) object

Peripheral instance associated with this block.

#### `registers` · [`[DmAmRegister!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-register.md) non-null object

Registers contained within this block.

#### `size` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar

Size in bytes.

#### `sizeHex` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Size formatted as hex (0x...).

#### `startAddress` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar

Start address in bytes.

#### `startAddressHex` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Start address formatted as hex (0x...).

#### `type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Area type (Memory or Peripheral).

#### `upperAddress` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar

Upper address in bytes.

#### `upperAddressHex` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Upper address formatted as hex (0x...).
