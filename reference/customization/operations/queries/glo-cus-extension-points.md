---
title: "gloCusExtensionPoints"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/operations/queries/glo-cus-extension-points"
bounded_context: "Customization"
kind: "queries"
experimental: false
deprecated: false
---

# gloCusExtensionPoints

Retrieves a list of registered extension points.

```graphql
gloCusExtensionPoints(
  order: [GloCusExtensionPointSortInput!]
  where: GloCusExtensionPointFilterInput
): [GloCusExtensionPoint!]!
```

### Arguments

#### `gloCusExtensionPoints.order` · [`[GloCusExtensionPointSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-extension-point-sort-input.md) list input customization

#### `gloCusExtensionPoints.where` · [`GloCusExtensionPointFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/glo-cus-extension-point-filter-input.md) input customization

### Type

#### [`GloCusExtensionPoint`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-extension-point.md) object customization
