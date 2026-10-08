---
title: "DesLifeCycleDefinition"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-definition"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesLifeCycleDefinition

Revision naming scheme details obtained by [`desLifeCycleDefinitions`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-life-cycle-definitions.md).

### Common Data Model

- [Lifecycle Definition](https://w3id.org/altium/cdm/platform/LifecycleDefinition) — Defines the set of states that an entity can transition through in its lifecycle. This definition clarifies what stage a revision of an entity has reached in its 'life' and what it can be safely used for. Different entities can have different lifecycle definitions assigned to them.

  - IRI: [`https://w3id.org/altium/cdm/platform/LifecycleDefinition`](https://w3id.org/altium/cdm/platform/LifecycleDefinition)
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

#### `contentTypes` · [`[DesContentTypeKind!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-content-type-kind.md) non-null enum

The [`DesContentTypeKind`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-content-type-kind.md) list for this life cycle definition.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) this life cycle definition was created.

#### `createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object

The user this life cycle definition was created by.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The node identifier.

#### `isControlledPerContentType` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Returns `true` if the life cycle definition is controlled per content type.

#### `isRevisionSchemeAssigned` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Tells if this life cycle definition is automatically assigned the first [`DesLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) when a revision is released.

#### `lifeCycleManagementType` · [`DesLifeCycleManagementType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-life-cycle-management-type.md) non-null enum

Type of life cycle management.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of this life cycle definition.

#### `stages` · [`[DesLifeCycleStage!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-stage.md) non-null object

The [`DesLifeCycleStage`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-stage.md) list for this life cycle definition.

#### `stateTransitions` · [`[DesLifeCycleStateTransition!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition.md) non-null object

The [`DesLifeCycleStateTransition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition.md) list for this life cycle definition.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) this life cycle definition was last updated.

#### `updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object

The user this life cycle definition was last updated by.

#### Deprecated

#### `lifeCycleDefinitionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Use `id` instead.
