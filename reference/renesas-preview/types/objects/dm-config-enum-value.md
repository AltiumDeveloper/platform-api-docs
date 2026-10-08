---
title: "DmConfigEnumValue"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-config-enum-value"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmConfigEnumValue

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Configuration enumeration value for a port setting.

### Common Data Model

- [PortConfigurationEnumValue](https://w3id.org/altium/cdm/deviceModel/PortConfigurationEnumValue) — An enumerated value for a port configuration.
  - IRI: [`https://w3id.org/altium/cdm/deviceModel/PortConfigurationEnumValue`](https://w3id.org/altium/cdm/deviceModel/PortConfigurationEnumValue)

### Member Of

[`DmPortConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-configuration.md) object

```graphql
type DmConfigEnumValue {
  configDependencies: [DmConfigDependency!]!
  display: String!
  id: String!
  name: String!
}
```

### Fields

#### `configDependencies` · [`[DmConfigDependency!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-config-dependency.md) non-null object

Configuration dependencies associated with this enumeration value.

#### `display` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Display representation of the enumeration value.

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier for the enumeration value.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Display name of the enumeration value.
