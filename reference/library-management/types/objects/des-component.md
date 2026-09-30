---
title: "DesComponent"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesComponent

A component contains the parametric details of a PCB part.

### Common Data Model

- [Component Revision](https://altiumdeveloper.github.io/cdm/classes/lib_ComponentRevision/) — Revision of a Component.
  - GRID: `grid:workspace:{workspace-id}:library:component-revision/{id}`

### Returned By

[`desComponentById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-component-by-id.md) query · [`desSearchComponentsByIpns`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-search-components-by-ipns.md) query

### Member Of

[`DesBomItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item.md) object · [`DesBomItemInstance`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-bom-item-instance.md) object · [`DesCadBoardComponentType`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-cad-board-component-type.md) object · [`DesComponentConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-connection.md) object · [`DesComponentEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-edge.md) object · [`DesDesignItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-design-item.md) object

### Interfaces

#### [`Node`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/node.md) interface common

The node interface is implemented by entities that have a global unique identifier.

### Implemented By

[`DesUnionPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/unions/des-union-payload.md) union

```graphql
type DesComponent implements Node {
  comment: String!
  componentTemplate: DesComponentTemplateRevision
  componentType: DesComponentType
  createdAt: DateTime!
  createdBy: DesUser!
  description: String!
  details: DesComponentDetails!
  folder: DesFolder
  id: ID!
  isManaged: Boolean!
  manufacturerParts: [DesManufacturerPart!]!
  model3D: DesModel3D
  modifiedAt: DateTime!
  name: String!
  revision: DesRevision!
  revisionId: String!
}
```

### Fields

#### `DesComponent.comment` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The additional information for this component.

#### `DesComponent.componentTemplate` · [`DesComponentTemplateRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template-revision.md) object library-management

The component template revision linked to this component revision, if any.

#### `DesComponent.componentType` · [`DesComponentType`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-type.md) object library-management

The component type classification for this component.

#### `DesComponent.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` when this component was created.

#### `DesComponent.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user who created this component.

#### `DesComponent.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The summary of function or other performance details for this component.

#### `DesComponent.details` · [`DesComponentDetails!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-details.md) non-null object library-management

More component data, consider using only with `desComponentById`.

#### `DesComponent.folder` · [`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object platform

The component folder.

#### `DesComponent.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The node identifier used by `desComponentById`. Unmanaged components may be not found.

#### `DesComponent.isManaged` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Gets true if the component is managed.

#### `DesComponent.manufacturerParts` · [`[DesManufacturerPart!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-manufacturer-part.md) non-null object library-management

The list of the part choices associated with this component.

#### `DesComponent.model3D` · [`DesModel3D`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-model-3-d.md) object design

Component 3D model.

#### `DesComponent.modifiedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` when this component was last modified.

#### `DesComponent.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The library label for this component.

#### `DesComponent.revision` · [`DesRevision!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision.md) non-null object platform

The component revision.

#### `DesComponent.revisionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The identifier of the component revision.
