---
title: "DesLifeCycleDefinition"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-definition"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesLifeCycleDefinition

Revision naming scheme details obtained by `desLifeCycleDefinitions`.

### Common Data Model

- [Lifecycle Definition](https://altiumdeveloper.github.io/cdm/classes/plt_LifecycleDefinition/) — Defines the set of states that an entity can transition through in its lifecycle. This definition clarifies what stage a revision of an entity has reached in its 'life' and what it can be safely used for. Different entities can have different lifecycle definitions assigned to them.
  - GRID: `grid:workspace:{workspace-id}:platform:lifecycle-definition/{id}`

### Returned By

[`desLifeCycleDefinitionByContentTypeKind`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-life-cycle-definition-by-content-type-kind.md) query · [`desLifeCycleDefinitionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-life-cycle-definition-by-id.md) query · [`desLifeCycleDefinitions`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-life-cycle-definitions.md) query

### Member Of

[`DesPartLifecycle`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-lifecycle.md) object

```graphql
type DesLifeCycleDefinition {
  contentTypes: [DesContentTypeKind!]!
  createdAt: DateTime!
  createdBy: DesUser!
  id: ID!
  isControlledPerContentType: Boolean!
  isRevisionSchemeAssigned: Boolean!
  lifeCycleDefinitionId: String! @deprecated
  lifeCycleManagementType: DesLifeCycleManagementType!
  name: String!
  stages: [DesLifeCycleStage!]!
  stateTransitions: [DesLifeCycleStateTransition!]!
  updatedAt: DateTime!
  updatedBy: DesUser!
}
```

### Fields

#### `DesLifeCycleDefinition.contentTypes` · [`[DesContentTypeKind!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-content-type-kind.md) non-null enum platform

The `DesContentTypeKind` list for this life cycle definition.

#### `DesLifeCycleDefinition.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` this life cycle definition was created.

#### `DesLifeCycleDefinition.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this life cycle definition was created by.

#### `DesLifeCycleDefinition.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The node identifier.

#### `DesLifeCycleDefinition.isControlledPerContentType` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Returns `true` if the life cycle definition is controlled per content type.

#### `DesLifeCycleDefinition.isRevisionSchemeAssigned` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Tells if this life cycle definition is automatically assigned the first `DesLifeCycleState` when a revision is released.

#### `DesLifeCycleDefinition.lifeCycleManagementType` · [`DesLifeCycleManagementType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-life-cycle-management-type.md) non-null enum platform

Type of life cycle management.

#### `DesLifeCycleDefinition.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of this life cycle definition.

#### `DesLifeCycleDefinition.stages` · [`[DesLifeCycleStage!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-stage.md) non-null object platform

The `DesLifeCycleStage` list for this life cycle definition.

#### `DesLifeCycleDefinition.stateTransitions` · [`[DesLifeCycleStateTransition!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition.md) non-null object platform

The `DesLifeCycleStateTransition` list for this life cycle definition.

#### `DesLifeCycleDefinition.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` this life cycle definition was last updated.

#### `DesLifeCycleDefinition.updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this life cycle definition was last updated by.

#### Deprecated

#### `DesLifeCycleDefinition.lifeCycleDefinitionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar common

> **Deprecated:** Use `id` instead.
