---
title: "SysEsdDocument"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-document"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysEsdDocument

Represents an ESD (Electronic System Design) document stored in a regional workspace.

### Common Data Model

- [ESD Document](https://altiumdeveloper.github.io/cdm/classes/sys_ESDDocument/) — A system-level block diagram document used in a Renesas 365 solution (listed there as a System Design project) to describe the architecture of the system at a functional level. It holds functional blocks with their hardware components, software components and ports, the connections between blocks, and blankets through which parts of the design can be linked to PCB or software projects. Pushing to and pulling from the solution's System Data Model (SDM) for the system design is done from the ESD document. Blankets are not modelled as a separate entity here (see MF-068).
  - GRID: `grid:workspace:{workspace-id}:system-design:esd/{id}`

### Returned By

[`sysEsdDocumentById`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-esd-document-by-id.md) query · [`sysEsdDocuments`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-esd-documents.md) query · [`sysEsdDocumentsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-esd-documents-by-ids.md) query

### Member Of

[`SolSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) object · [`SysEsdCreateDocumentPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-create-document-payload.md) object · [`SysEsdUpdateDocumentPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-update-document-payload.md) object

```graphql
type SysEsdDocument {
  createdAt: DateTime!
  createdBy: DesWorkspaceUser!
  createdById: ID! @deprecated
  folderId: String!
  id: ID!
  isScaffolding: Boolean!
  model: SysEsdCompiledMetadata
  modifiedAt: DateTime
  modifiedBy: DesWorkspaceUser
  modifiedById: ID @deprecated
  name: String!
  owner: DesWorkspaceUser
  permissions: [DesPermission!]
  previewUrl: String!
}
```

### Fields

#### `SysEsdDocument.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

Date and time when the ESD document was created.

#### `SysEsdDocument.createdBy` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object platform

User who created the ESD document.

#### `SysEsdDocument.folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier of the folder that contains the ESD document.

#### `SysEsdDocument.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Unique identifier of the ESD document.

#### `SysEsdDocument.isScaffolding` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Gets current scaffolding status.

#### `SysEsdDocument.model` · [`SysEsdCompiledMetadata`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-compiled-metadata.md) object system-design

Gets compiled ESD for the document.

#### `SysEsdDocument.modifiedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

Date and time when the ESD document was last modified, or null if it has never been modified.

#### `SysEsdDocument.modifiedBy` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object platform

User who last modified the ESD document, or null if it has never been modified.

#### `SysEsdDocument.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Display name of the ESD document.

#### `SysEsdDocument.owner` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object platform

Esd document's owner.

#### `SysEsdDocument.permissions` · [`[DesPermission!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) list interface platform

Collection of the Esd document's permissions.

#### `SysEsdDocument.previewUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

URL of the ESD document preview image.

#### Deprecated

#### `SysEsdDocument.createdById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Field plays a technical role for schema stitching purposes.

#### `SysEsdDocument.modifiedById` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar common

> **Deprecated:** Field plays a technical role for schema stitching purposes.
