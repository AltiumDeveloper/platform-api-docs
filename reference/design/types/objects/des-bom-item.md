---
title: "DesBomItem"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesBomItem

A Bill of Materials (BOM) item contains usage information for a unique component on the PCB.

### Member Of

[`DesBom`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom.md) object · [`DesBomItemConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item-connection.md) object · [`DesBomItemEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item-edge.md) object

```graphql
type DesBomItem {
  bomItemInstances: [DesBomItemInstance!]!
  component: DesComponent!
  quantity: Int!
}
```

### Fields

#### `DesBomItem.bomItemInstances` · [`[DesBomItemInstance!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item-instance.md) non-null object design

The list of each instance of this BOM item.

#### `DesBomItem.component` · [`DesComponent!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) non-null object library-management

The detailed component information for this BOM item.

#### `DesBomItem.quantity` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The total number of times this item is used.
