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

- [ESD Document](https://w3id.org/altium/cdm/system/ESDDocument) — A system-level block diagram document used in a Renesas 365 solution (listed there as a System Design project) to describe the architecture of the system at a functional level. It holds functional blocks with their hardware components, software components and ports, the connections between blocks, and blankets through which parts of the design can be linked to PCB or software projects. Pushing to and pulling from the solution's System Data Model (SDM) for the system design is done from the ESD document. Blankets are not modelled as a separate entity here (see MF-068).

  - IRI: [`https://w3id.org/altium/cdm/system/ESDDocument`](https://w3id.org/altium/cdm/system/ESDDocument)
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

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

Date and time when the ESD document was created.

#### `createdBy` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object Platform

User who created the ESD document.

#### `folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the folder that contains the ESD document.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Unique identifier of the ESD document.

#### `isScaffolding` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Gets current scaffolding status.

#### `model` · [`SysEsdCompiledMetadata`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-compiled-metadata.md) object

Gets compiled ESD for the document.

#### `modifiedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

Date and time when the ESD document was last modified, or null if it has never been modified.

#### `modifiedBy` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object Platform

User who last modified the ESD document, or null if it has never been modified.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Display name of the ESD document.

#### `owner` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object Platform

Esd document's owner.

#### `permissions` · [`[DesPermission!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) list interface Platform

Collection of the Esd document's permissions.

#### `previewUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

URL of the ESD document preview image.

#### Deprecated

#### `createdById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** Field plays a technical role for schema stitching purposes.

#### `modifiedById` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar

> **Deprecated:** Field plays a technical role for schema stitching purposes.
