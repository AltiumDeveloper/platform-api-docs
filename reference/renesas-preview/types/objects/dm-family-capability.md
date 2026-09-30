---
title: "DmFamilyCapability"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-family-capability"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmFamilyCapability

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

A single named family capability. The set is an extensible key-value list so new capabilities do not require a schema change.

### Member Of

[`DmDeviceFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-family.md) object

```graphql
type DmFamilyCapability {
  key: String!
  value: Boolean!
}
```

### Fields

#### `DmFamilyCapability.key` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Capability identifier, e.g. "bspGeneration".

#### `DmFamilyCapability.value` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Whether the capability is available for devices in this family.
