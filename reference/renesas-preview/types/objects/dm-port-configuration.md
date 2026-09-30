---
title: "DmPortConfiguration"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-configuration"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmPortConfiguration

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

A configuration option for a port (display-only in this schema).

### Common Data Model

- [PortConfiguration](https://altiumdeveloper.github.io/cdm/classes/dm_PortConfiguration/) — A specific configuration for a port.

### Member Of

[`DmPort`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port.md) object

```graphql
type DmPortConfiguration {
  enumValues: [DmConfigEnumValue!]!
  id: String!
  name: String!
}
```

### Fields

#### `DmPortConfiguration.enumValues` · [`[DmConfigEnumValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-config-enum-value.md) non-null object renesas-preview

Enumerated values associated with the port configuration.

#### `DmPortConfiguration.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier for the port configuration.

#### `DmPortConfiguration.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of the port configuration.
