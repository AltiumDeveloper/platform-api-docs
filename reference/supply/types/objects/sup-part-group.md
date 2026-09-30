---
title: "SupPartGroup"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-group"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartGroup

`SupPartGroup` contains the relevant information relating to a part group. It represents the leaves of the Part Family hierarchy, and contain the parts represented by this group.

### Common Data Model

- [Part Group](https://altiumdeveloper.github.io/cdm/classes/sup_PartGroup/)
  - GRID: `grid:supply::platform:part-group/{id}`

### Returned By

[`supPartGroupById`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-part-group-by-id.md) query · [`supPartGroupByPartId`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-part-group-by-part-id.md) query · [`supPartGroupsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-part-groups-by-ids.md) query

### Member Of

[`SupPartFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family.md) object · [`SupPartGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-group.md) object

### Interfaces

#### [`SupPartFamilyEntity`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/interfaces/sup-part-family-entity.md) interface supply

Shared Fields between `SupPartFamily` and `SupPartGroup`.

```graphql
type SupPartGroup implements SupPartFamilyEntity {
  applicationIDs: [String!]!
  categoryID: String!
  documents(
    type: SupPartFamilyDocumentType
  ): [SupPartFamilyDocument!]!
  id: ID!
  keyFeatures: [SupPartFamilyKeyFeature!]!
  manufacturerID: String!
  overview: String!
  parent: SupPartFamily
  partIDs: [String!]!
  referenceDesignIDs: [String!]!
  siblings: [SupPartGroup!]!
  subtitle: String!
  tags: [SupPartFamilyTag!]!
  title: String!
}
```

### Fields

#### `SupPartGroup.applicationIDs` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

`applicationIDs` is a list of the identifiers of relevant applications this part group can be useful for.

#### `SupPartGroup.categoryID` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

`categoryID` is the identifier of the part category of this part group.

#### `SupPartGroup.documents` · [`[SupPartFamilyDocument!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family-document.md) non-null object supply

`documents` is a list of the key documentation related to this part group.

##### `SupPartGroup.documents.type` · [`SupPartFamilyDocumentType`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-part-family-document-type.md) enum supply

#### `SupPartGroup.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

`id` is the global resource id (GRID) for this Part Group.

#### `SupPartGroup.keyFeatures` · [`[SupPartFamilyKeyFeature!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family-key-feature.md) non-null object supply

`keyFeatures` is the list of key part features relevant to this part group.

#### `SupPartGroup.manufacturerID` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

`manufacturerID` is the identifier of the manufacturer of this part group.

#### `SupPartGroup.overview` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

`overview` of the key details of this part group.

#### `SupPartGroup.parent` · [`SupPartFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family.md) object supply

`parent` is the the part family representing the direct parent of this group.

#### `SupPartGroup.partIDs` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

`partIDs` is the list of identifiers of the physical parts within this group.

#### `SupPartGroup.referenceDesignIDs` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

`referenceDesignIDs` is a list of the identifiers of reference designs relevant to this part group.

#### `SupPartGroup.siblings` · [`[SupPartGroup!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-group.md) non-null object supply

`siblings` is a list of direct sibling part groups of the current group, which have the same parent. They are usually a close alternative choice of the current group.

#### `SupPartGroup.subtitle` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

`subtitle` of the part group.

#### `SupPartGroup.tags` · [`[SupPartFamilyTag!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family-tag.md) non-null object supply

`tags` is a list of additional metadata for categorizing this part group.

#### `SupPartGroup.title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

`title` of the part group.
