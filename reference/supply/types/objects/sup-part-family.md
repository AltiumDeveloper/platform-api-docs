---
title: "SupPartFamily"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartFamily

`SupPartFamily` contains the relevant information related to a part family. It exists in a hierarchy of other part families, they can contain children which represent other part families or `partGroups` which represent the leaves of the hierarchy tree.

### Common Data Model

- [Part Family](https://altiumdeveloper.github.io/cdm/classes/sup_PartFamily/) — A manufacturer's grouping of parts in the supply data, where the kind of family is vendor-specific (e.g. Series or Family). Part families form a hierarchy: a family has either child families or, at the lowest level, Part Groups. Families sharing the same parent are usually close alternatives to one another.
  - GRID: `grid:supply::platform:part-family/{id}`

### Member Of

[`SupPartFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family.md) object · [`SupPartGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-group.md) object

### Interfaces

#### [`SupPartFamilyEntity`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/interfaces/sup-part-family-entity.md) interface supply

Shared Fields between `SupPartFamily` and `SupPartGroup`.

```graphql
type SupPartFamily implements SupPartFamilyEntity {
  applicationIDs: [String!]!
  categoryID: String!
  children: [SupPartFamily!]!
  familyType: String!
  id: ID!
  keyFeatures: [SupPartFamilyKeyFeature!]!
  manufacturerID: String!
  overview: String!
  parent: SupPartFamily
  partGroups: [SupPartGroup!]!
  siblings: [SupPartFamily!]!
  subtitle: String!
  tags: [SupPartFamilyTag!]!
  title: String!
}
```

### Fields

#### `SupPartFamily.applicationIDs` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

`applicationIDs` is a list of the identifiers of relevant applications this part family can be useful for.

#### `SupPartFamily.categoryID` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

`categoryID` is the identifier of the part category of this part family.

#### `SupPartFamily.children` · [`[SupPartFamily!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family.md) non-null object supply

`children` is a list of the part families that are the direct children of this family. There will be one of either `children` or `partGroups`.

#### `SupPartFamily.familyType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

`familyType` describes the part family in a part family hierarchy. It is vendor and part family specific. Examples include: 'Series', 'Family', etc.

#### `SupPartFamily.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

`id` is the global resource id (GRID) for this Part Family.

#### `SupPartFamily.keyFeatures` · [`[SupPartFamilyKeyFeature!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family-key-feature.md) non-null object supply

`keyFeatures` is the list of key part features relevant to this part family.

#### `SupPartFamily.manufacturerID` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

`manufacturerID` is the identifier of the manufacturer of this part family.

#### `SupPartFamily.overview` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

`overview` of the part family.

#### `SupPartFamily.parent` · [`SupPartFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family.md) object supply

`parent` is the the direct parent of this family. This will be `null` if this is the highest level.

#### `SupPartFamily.partGroups` · [`[SupPartGroup!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-group.md) non-null object supply

`partGroups` is a list of the part groups that are the direct children of this family. There will be one of either `children` or `partGroups`.

#### `SupPartFamily.siblings` · [`[SupPartFamily!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family.md) non-null object supply

`siblings` is a list of direct sibling part families of the current group, which have the same parent. They are usually a close alternative choice of the current group.

#### `SupPartFamily.subtitle` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

`subtitle` of the part family.

#### `SupPartFamily.tags` · [`[SupPartFamilyTag!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family-tag.md) non-null object supply

`tags` is a list of additional metadata for categorizing this part family.

#### `SupPartFamily.title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

`title` of the part family.
