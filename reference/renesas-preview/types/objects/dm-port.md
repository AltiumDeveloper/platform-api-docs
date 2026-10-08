---
title: "DmPort"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmPort

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

A single device port with its functions, configurations, and connections.

### Common Data Model

- [Port](https://w3id.org/altium/cdm/deviceModel/Port) — A physical port on the device, with its functions, configurations, and connections.
  - IRI: [`https://w3id.org/altium/cdm/deviceModel/Port`](https://w3id.org/altium/cdm/deviceModel/Port)

### Member Of

[`DmModePinConfig`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-mode-pin-config.md) object · [`DmPortModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-model.md) object

```graphql
type DmPort {
  comment: String!
  configurations: [DmPortConfiguration!]!
  connections: [DmPortConnection!]!
  functions: [DmPortFunction!]!
  id: String!
  isUserAssignable: Boolean!
  name: String!
  pin: DmPin!
  symbolicName: String!
}
```

### Fields

#### `comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Optional comment or description for the port.

#### `configurations` · [`[DmPortConfiguration!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-configuration.md) non-null object

Port configuration options applicable to this port.

#### `connections` · [`[DmPortConnection!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-connection.md) non-null object

Connections from this port to other components or signals.

#### `functions` · [`[DmPortFunction!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-function.md) non-null object

Available functions that can be assigned to the port.

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Unique identifier for the port.

#### `isUserAssignable` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether this port can be assigned by the user.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Display name of the port.

#### `pin` · [`DmPin!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-pin.md) non-null object

Associated pin.

#### `symbolicName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Symbolic name for the port used in code or configuration.
