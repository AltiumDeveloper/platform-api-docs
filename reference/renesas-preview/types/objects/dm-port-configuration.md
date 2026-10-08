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

- [PortConfiguration](https://w3id.org/altium/cdm/deviceModel/PortConfiguration) — A specific configuration for a port.
  - IRI: [`https://w3id.org/altium/cdm/deviceModel/PortConfiguration`](https://w3id.org/altium/cdm/deviceModel/PortConfiguration)

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

#### `enumValues` · [`[DmConfigEnumValue!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-config-enum-value.md) non-null object

Enumerated values associated with the port configuration.

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier for the port configuration.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the port configuration.
