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

- [Part Group](https://w3id.org/altium/cdm/supply/PartGroup) — A leaf of the part family hierarchy in the supply data, holding the parts that belong to it together with group-level information such as its manufacturer, overview, key features and documents. Groups sharing the same parent family are usually close alternatives to one another.

  - IRI: [`https://w3id.org/altium/cdm/supply/PartGroup`](https://w3id.org/altium/cdm/supply/PartGroup)
  - GRID: `grid:supply::platform:part-group/{id}`

### Returned By

[`supPartGroupById`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-part-group-by-id.md) query · [`supPartGroupByPartId`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-part-group-by-part-id.md) query · [`supPartGroupsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-part-groups-by-ids.md) query

### Member Of

[`SupPartFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family.md) object · [`SupPartGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-group.md) object

### Interfaces

#### [`SupPartFamilyEntity`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/interfaces/sup-part-family-entity.md) interface

Shared Fields between [`SupPartFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family.md) and `SupPartGroup`.

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

#### `applicationIDs` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

`applicationIDs` is a list of the identifiers of relevant applications this part group can be useful for.

#### `categoryID` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

`categoryID` is the identifier of the part category of this part group.

#### `documents` · [`[SupPartFamilyDocument!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family-document.md) non-null object

`documents` is a list of the key documentation related to this part group.

##### `type` · [`SupPartFamilyDocumentType`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-part-family-document-type.md) enum

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

`id` is the global resource id (GRID) for this Part Group.

#### `keyFeatures` · [`[SupPartFamilyKeyFeature!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family-key-feature.md) non-null object

`keyFeatures` is the list of key part features relevant to this part group.

#### `manufacturerID` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

`manufacturerID` is the identifier of the manufacturer of this part group.

#### `overview` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

`overview` of the key details of this part group.

#### `parent` · [`SupPartFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family.md) object

`parent` is the the part family representing the direct parent of this group.

#### `partIDs` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

`partIDs` is the list of identifiers of the physical parts within this group.

#### `referenceDesignIDs` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

`referenceDesignIDs` is a list of the identifiers of reference designs relevant to this part group.

#### `siblings` · [`[SupPartGroup!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-group.md) non-null object

`siblings` is a list of direct sibling part groups of the current group, which have the same parent. They are usually a close alternative choice of the current group.

#### `subtitle` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

`subtitle` of the part group.

#### `tags` · [`[SupPartFamilyTag!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family-tag.md) non-null object

`tags` is a list of additional metadata for categorizing this part group.

#### `title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

`title` of the part group.
