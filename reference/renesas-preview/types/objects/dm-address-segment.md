---
title: "DmAddressSegment"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-segment"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmAddressSegment

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Address segment which can contain child blocks and has a total segment size.

### Common Data Model

- [AddressSegment](https://w3id.org/altium/cdm/deviceModel/AddressSegment) — A contiguous region of the device's memory map. Each segment can represent either a memory or a peripheral region.
  - IRI: [`https://w3id.org/altium/cdm/deviceModel/AddressSegment`](https://w3id.org/altium/cdm/deviceModel/AddressSegment)

### Member Of

[`DmAddressMapModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-map-model.md) object

```graphql
type DmAddressSegment {
  blocks: [DmAddressBlock!]!
  description: String!
  name: String!
  nameAliases: [String!]!
  peripherals: [DmPeripheral!]!
  size: Long!
  sizeHex: String!
  startAddress: Long!
  startAddressHex: String!
}
```

### Fields

#### `blocks` · [`[DmAddressBlock!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-block.md) non-null object

Nested address blocks within the segment.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Segment description.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Segment name.

#### `nameAliases` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Segment aliases.

#### `peripherals` · [`[DmPeripheral!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral.md) non-null object

Peripherals associated with this segment.

#### `size` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar

Total segment size in bytes.

#### `sizeHex` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Total segment size formatted as hex (0x...).

#### `startAddress` · [`Long!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/long.md) non-null scalar

#### `startAddressHex` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
