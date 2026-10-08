---
title: "dmInterfaceTypeModels"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/dm-interface-type-models"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: true
deprecated: false
---

# dmInterfaceTypeModels

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Returns the unified dictionary of supported interface (port) types, including display metadata and which are user-selectable. Source of truth for supported interface types.

```graphql
dmInterfaceTypeModels: [DmInterfaceTypeModel!]!
```

### Type

#### [`DmInterfaceTypeModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-interface-type-model.md) object **EXPERIMENTAL**

A supported interface (port) type with display metadata. Source of truth for the interface types the product supports.
