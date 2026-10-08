---
title: "DesLifeCycleState"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesLifeCycleState

Information about the life cycle state.

### Common Data Model

- [Lifecycle State](https://w3id.org/altium/cdm/platform/LifecycleState) — A named point in an Item Revision's lifecycle (e.g. Planned, New From Design, In Production, Obsolete) that shows its status from a business perspective. Each state's properties include whether revisions in that state are shown in the Explorer panel and whether they may be used in designs; a revision moves to another state only through a transition defined in its lifecycle definition.
  - IRI: [`https://w3id.org/altium/cdm/platform/LifecycleState`](https://w3id.org/altium/cdm/platform/LifecycleState)

### Member Of

[`DesFootprint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint.md) object · [`DesLifeCycleStage`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-stage.md) object · [`DesLifeCycleStateTransition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition.md) object · [`DesReuseBlockRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-revision.md) object · [`DesRevisionDetails`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-details.md) object · [`DesSymbol`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol.md) object

```graphql
type DesLifeCycleState {
  backgroundColor: DesColor!
  createdAt: DateTime!
  createdBy: DesUser!
  description: String!
  foregroundColor: DesColor!
  isAllowedInDesign: Boolean!
  isInitialState: Boolean!
  isVisible: Boolean!
  lifeCycleStateId: String!
  name: String!
  stateIndex: Int!
  updatedAt: DateTime!
  updatedBy: DesUser!
}
```

### Fields

#### `backgroundColor` · [`DesColor!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-color.md) non-null object Design

The background color for this life cycle state.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) this life cycle state was created.

#### `createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object

The user this life cycle state was created by.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The description of this life cycle state.

#### `foregroundColor` · [`DesColor!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-color.md) non-null object Design

The foreground color for this life cycle state.

#### `isAllowedInDesign` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Determines whether items in this life cycle state are allowed to be used in a design.

#### `isInitialState` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Determines whether this life cycle state is the first of all the states for the associated life cycle definition.

#### `isVisible` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Determines whether this life cycle state is visible in the Altium Designer vault panel.

#### `lifeCycleStateId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference identifier for this life cycle state.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of this life cycle state.

#### `stateIndex` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The state index for this life cycle state.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) this life cycle state was last updated at.

#### `updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object

The user this life cycle state was last updated by.
