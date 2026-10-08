---
title: "dmSoftwareModelFromConfigurationXml"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/renesas-preview/operations/queries/dm-software-model-from-configuration-xml"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: true
deprecated: true
---

# dmSoftwareModelFromConfigurationXml

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

> **Deprecated:** For internal use only. Will be removed in next few weeks.

### Type

#### [`DmSoftwareModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-software-model.md) object **EXPERIMENTAL**

The software model for a device, including the device part number, its ports, and associated software components such as middleware and drivers.

```graphql
dmSoftwareModelFromConfigurationXml(
  fileId: String!
): DmSoftwareModel! @deprecated
```

### Arguments

#### `fileId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
