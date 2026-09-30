---
title: "RsaMotorStudioProject"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-project"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# RsaMotorStudioProject

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Returned By

[`rsaMotorStudioProjectById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-project-by-id.md) query · [`rsaMotorStudioProjects`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-projects.md) query · [`rsaMotorStudioProjectsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-projects-by-ids.md) query

### Member Of

[`RsaMotorStudioCreateProjectPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-create-project-payload.md) object · [`RsaMotorStudioTuning`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning.md) object · [`RsaMotorStudioUpdateProjectPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-update-project-payload.md) object · [`SolSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) object

```graphql
type RsaMotorStudioProject {
  createdAt: DateTime!
  createdBy: DesWorkspaceUser!
  createdById: ID! @deprecated
  description: String
  easyModeConfigs: [RsaMotorStudioEasyModeConfig!]!
  folderId: String!
  id: ID!
  modifiedAt: DateTime
  modifiedBy: DesWorkspaceUser
  modifiedById: ID @deprecated
  name: String!
  parentSolutions: [SolSolution!]!
  scopeCaptures: [RsaMotorStudioScopeCapture!]!
  scopeConfigs: [RsaMotorStudioScopeConfig!]!
  tunings: [RsaMotorStudioTuning!]!
  variableSets: [RsaMotorStudioVariableSet!]!
}
```

### Fields

#### `RsaMotorStudioProject.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common **EXPERIMENTAL**

#### `RsaMotorStudioProject.createdBy` · [`DesWorkspaceUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) non-null object platform **EXPERIMENTAL**

#### `RsaMotorStudioProject.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common **EXPERIMENTAL**

#### `RsaMotorStudioProject.easyModeConfigs` · [`[RsaMotorStudioEasyModeConfig!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-easy-mode-config.md) non-null object renesas-preview **EXPERIMENTAL**

Collection of easymode configurations associated with the motor studio project.

#### `RsaMotorStudioProject.folderId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common **EXPERIMENTAL**

#### `RsaMotorStudioProject.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `RsaMotorStudioProject.modifiedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common **EXPERIMENTAL**

#### `RsaMotorStudioProject.modifiedBy` · [`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object platform **EXPERIMENTAL**

#### `RsaMotorStudioProject.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common **EXPERIMENTAL**

#### `RsaMotorStudioProject.parentSolutions` · [`[SolSolution!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) non-null object platform **EXPERIMENTAL**

Parent solutions linked to this MotorStudio project.

#### `RsaMotorStudioProject.scopeCaptures` · [`[RsaMotorStudioScopeCapture!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-scope-capture.md) non-null object renesas-preview **EXPERIMENTAL**

Collection of scope captures associated with the motor studio project.

#### `RsaMotorStudioProject.scopeConfigs` · [`[RsaMotorStudioScopeConfig!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-scope-config.md) non-null object renesas-preview **EXPERIMENTAL**

Collection of scope configurations associated with the motor studio project.

#### `RsaMotorStudioProject.tunings` · [`[RsaMotorStudioTuning!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning.md) non-null object renesas-preview **EXPERIMENTAL**

Collection of tunings linked with the motor studio project.

#### `RsaMotorStudioProject.variableSets` · [`[RsaMotorStudioVariableSet!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-variable-set.md) non-null object renesas-preview **EXPERIMENTAL**

Collection of variable sets associated with the motor studio project.

#### Deprecated

#### `RsaMotorStudioProject.createdById` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar common **EXPERIMENTAL**

> **Deprecated:** Fields play a technical role for schema stitching purposes.

#### `RsaMotorStudioProject.modifiedById` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** scalar common **EXPERIMENTAL**

> **Deprecated:** Fields play a technical role for schema stitching purposes.
