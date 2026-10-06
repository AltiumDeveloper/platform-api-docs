---
title: "DmAddressMapModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-map-model"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmAddressMapModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Address map for the device including memory and peripheral regions.

### Common Data Model

- [AddressMap](https://altiumdeveloper.github.io/cdm/classes/dm_AddressMap/) — Address map for the device including memory and peripheral regions.

### Member Of

[`DmFullStackDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-full-stack-device-model.md) object

```graphql
type DmAddressMapModel {
  addressSegments: [DmAddressSegment!]!
}
```

### Fields

#### `DmAddressMapModel.addressSegments` · [`[DmAddressSegment!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-segment.md) non-null object renesas-preview

Address segments (block containers with total size and nested blocks).
