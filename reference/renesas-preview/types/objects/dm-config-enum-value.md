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

#### `DmConfigEnumValue.configDependencies` · [`[DmConfigDependency!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-config-dependency.md) non-null object renesas-preview

Configuration dependencies associated with this enumeration value.

#### `DmConfigEnumValue.display` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Display representation of the enumeration value.

#### `DmConfigEnumValue.id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier for the enumeration value.

#### `DmConfigEnumValue.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Display name of the enumeration value.
