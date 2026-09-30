---
title: "DmPortFunction"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-function"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmPortFunction

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

A function that a port can perform (display-only in this schema).

### Common Data Model

- [PortFunction](https://altiumdeveloper.github.io/cdm/classes/dm_PortFunction/) — A specific function that a port can perform.

### Member Of

[`DmPort`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port.md) object

```graphql
type DmPortFunction {
  name: String!
  peripheralInstanceName: String!
}
```

### Fields

#### `DmPortFunction.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the port function.

#### `DmPortFunction.peripheralInstanceName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the peripheral instance associated with this function.
