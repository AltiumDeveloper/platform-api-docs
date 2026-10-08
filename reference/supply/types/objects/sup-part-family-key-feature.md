---
title: "SupPartFamilyKeyFeature"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family-key-feature"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartFamilyKeyFeature

`SupPartFamilyKeyFeature` contains the key details for a Part Family feature.

### Member Of

[`SupPartFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family.md) object · [`SupPartFamilyEntity`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/interfaces/sup-part-family-entity.md) interface · [`SupPartGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-group.md) object

```graphql
type SupPartFamilyKeyFeature {
  group: String!
  metadata: [SupPartFamilyFeatureMetadata!]!
  name: String!
  units: String!
  value: String!
  valueType: SupPartFamilyFeatureValueType!
}
```

### Fields

#### `group` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `metadata` · [`[SupPartFamilyFeatureMetadata!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family-feature-metadata.md) non-null object

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `units` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `valueType` · [`SupPartFamilyFeatureValueType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-part-family-feature-value-type.md) non-null enum
