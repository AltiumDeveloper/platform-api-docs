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

- [Lifecycle State](https://altiumdeveloper.github.io/cdm/classes/plt_LifecycleState/)

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

#### `DesLifeCycleState.backgroundColor` · [`DesColor!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-color.md) non-null object design

The background color for this life cycle state.

#### `DesLifeCycleState.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` this life cycle state was created.

#### `DesLifeCycleState.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this life cycle state was created by.

#### `DesLifeCycleState.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The description of this life cycle state.

#### `DesLifeCycleState.foregroundColor` · [`DesColor!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-color.md) non-null object design

The foreground color for this life cycle state.

#### `DesLifeCycleState.isAllowedInDesign` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Determines whether items in this life cycle state are allowed to be used in a design.

#### `DesLifeCycleState.isInitialState` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Determines whether this life cycle state is the first of all the states for the associated life cycle definition.

#### `DesLifeCycleState.isVisible` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Determines whether this life cycle state is visible in the Altium Designer vault panel.

#### `DesLifeCycleState.lifeCycleStateId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The reference identifier for this life cycle state.

#### `DesLifeCycleState.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of this life cycle state.

#### `DesLifeCycleState.stateIndex` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The state index for this life cycle state.

#### `DesLifeCycleState.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` this life cycle state was last updated at.

#### `DesLifeCycleState.updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this life cycle state was last updated by.
