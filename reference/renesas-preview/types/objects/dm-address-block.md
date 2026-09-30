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

- [AddressBlock](https://altiumdeveloper.github.io/cdm/classes/dm_AddressBlock/) — Address block with start, size, and optional registers and peripherals.

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

#### `DmAddressBlock.dataSource` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Source(s) of this block (e.g., RZone, SVD, PinCfg).

#### `DmAddressBlock.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Description of the block.

#### `DmAddressBlock.memories` · [`[DmAmMemory!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-memory.md) non-null object renesas-preview

Memory entries contained within this block.

#### `DmAddressBlock.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the block.

#### `DmAddressBlock.peripheralInstance` · [`DmPeripheralInstance`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-instance.md) object renesas-preview

Peripheral instance associated with this block.

#### `DmAddressBlock.registers` · [`[DmAmRegister!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-register.md) non-null object renesas-preview

Registers contained within this block.

#### `DmAddressBlock.size` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar common

Size in bytes.

#### `DmAddressBlock.sizeHex` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Size formatted as hex (0x...).

#### `DmAddressBlock.startAddress` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar common

Start address in bytes.

#### `DmAddressBlock.startAddressHex` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Start address formatted as hex (0x...).

#### `DmAddressBlock.type` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Area type (Memory or Peripheral).

#### `DmAddressBlock.upperAddress` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar common

Upper address in bytes.

#### `DmAddressBlock.upperAddressHex` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Upper address formatted as hex (0x...).
