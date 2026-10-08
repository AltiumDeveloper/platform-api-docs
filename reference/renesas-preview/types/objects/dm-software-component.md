---
title: "DmSoftwareComponent"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-software-component"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmSoftwareComponent

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

The software component used in configuration.xml, optionally linked to a library ID.

### Member Of

[`DmSoftwareModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-software-model.md) object

```graphql
type DmSoftwareComponent {
  componentLibraryId: String
  id: String!
  name: String!
}
```

### Fields

#### `componentLibraryId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The component library ID that this software component belongs to.

#### `id` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Id of the software component

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the software component (e.g. a middleware or driver) defined in the configuration.xml for this device.
