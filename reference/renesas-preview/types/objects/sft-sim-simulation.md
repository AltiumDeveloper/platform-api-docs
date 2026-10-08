---
title: "SftSimSimulation"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-sim-simulation"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: false
deprecated: false
---

# SftSimSimulation

### Returned By

[`sftSimSimulationById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-sim-simulation-by-id.md) query · [`sftSimSimulations`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-sim-simulations.md) query · [`sftSimSimulationsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-sim-simulations-by-ids.md) query

### Member Of

[`SftSimSimulationCreatePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-sim-simulation-create-payload.md) object · [`SftSimSimulationUpdatePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-sim-simulation-update-payload.md) object · [`SolSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) object

```graphql
type SftSimSimulation {
  createdAt: DateTime!
  createdBy: DesWorkspaceUser!
  createdById: ID! @deprecated
  customProperties: [SftSimSimulationCustomProperty!]!
  description: String
  folderId: String!
  id: ID!
  modifiedAt: DateTime
  modifiedBy: DesWorkspaceUser
  modifiedById: ID @deprecated
  name: String!
  owner: DesWorkspaceUser
  permissions: [DesPermission!]
  previewUrl: String!
  repositoryUrl: String
  type: SftSimSimulationType!
}
```

### Fields

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

#### `createdBy` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object Platform

#### `customProperties` · [`[SftSimSimulationCustomProperty!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-sim-simulation-custom-property.md) non-null object

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `modifiedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `modifiedBy` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object Platform

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `owner` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object Platform

Simulation's owner.

#### `permissions` · [`[DesPermission!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/des-permission.md) list interface Platform

Collection of the simulation's permissions.

#### `previewUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `repositoryUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `type` · [`SftSimSimulationType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/enums/sft-sim-simulation-type.md) non-null enum

#### Deprecated

#### `createdById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** Field plays a technical role for schema stitching purposes.

#### `modifiedById` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar

> **Deprecated:** Field plays a technical role for schema stitching purposes.
