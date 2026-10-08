---
title: "DmFamilyPartModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-family-part-model"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmFamilyPartModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Root GraphQL type exposing the collection of device family part definitions.

### Returned By

[`dmFamilyPartModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/dm-family-part-model.md) query

```graphql
type DmFamilyPartModel {
  familyParts: [DmFamilyPart!]!
}
```

### Fields

#### `familyParts` · [`[DmFamilyPart!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-family-part.md) non-null object

List of family part variants defined for the device family.
