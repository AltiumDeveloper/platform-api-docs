---
title: "DmPortConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-connection"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmPortConnection

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

A connection associated with a port (display-only in this schema).

### Common Data Model

- [PortConnection](https://altiumdeveloper.github.io/cdm/classes/dm_PortConnection/) — A connection from this port to another component or signal.

### Member Of

[`DmPort`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port.md) object

```graphql
type DmPortConnection {
  id: String!
  name: String!
}
```

### Fields

#### `DmPortConnection.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier for the port connection.

#### `DmPortConnection.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the port connection.
