---
title: "BomItemElementAttribute"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomItemElementAttribute

Describes a BOM item element's attribute.

### Member Of

[`Bom`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom.md) interface · [`BomItemElementAttributeFloatValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute-float-value.md) object · [`BomItemElementAttributeIntegerValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute-integer-value.md) object · [`BomItemElementAttributeMoneyValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute-money-value.md) object · [`BomItemElementAttributePercentValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute-percent-value.md) object · [`BomItemElementAttributeStringValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-element-attribute-string-value.md) object · [`BomItemElementAttributeValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element-attribute-value.md) interface · [`BomRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release.md) object · [`BomWip`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) object

```graphql
type BomItemElementAttribute {
  attributeId: String!
  name: String!
  type: BomItemElementCustomAttributeType!
}
```

### Fields

#### `attributeId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

ID of the attribute.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the attribute.

#### `type` · [`BomItemElementCustomAttributeType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/enums/bom-item-element-custom-attribute-type.md) non-null enum

Type of the attribute. Please note that the actual attribute values may have different types.
