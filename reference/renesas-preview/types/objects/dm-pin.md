---
title: "DmPin"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-pin"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmPin

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Common Data Model

- [Pin](https://w3id.org/altium/cdm/deviceModel/Pin) — A physical pin on the device.
  - IRI: [`https://w3id.org/altium/cdm/deviceModel/Pin`](https://w3id.org/altium/cdm/deviceModel/Pin)

### Member Of

[`DmPort`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port.md) object

```graphql
type DmPin {
  name: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Pin name.
