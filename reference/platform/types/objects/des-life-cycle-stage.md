---
title: "DesLifeCycleStage"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-stage"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesLifeCycleStage

Information about the life cycle stage.

### Common Data Model

- [Lifecycle Stage](https://altiumdeveloper.github.io/cdm/classes/plt_LifecycleStage/) — A named stage that groups lifecycle states in a lifecycle definition using the Advanced management style (e.g. Design, Prototype, Production), indicating how far a revision has progressed in its development. Stages can be linked to the levels of the revision naming scheme. Definitions using the Simple style have states and transitions but no stages.

### Member Of

[`DesLifeCycleDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-definition.md) object

```graphql
type DesLifeCycleStage {
  createdAt: DateTime!
  createdBy: DesUser!
  lifeCycleStageId: String!
  name: String!
  stageIndex: Int!
  states: [DesLifeCycleState!]!
  updatedAt: DateTime!
  updatedBy: DesUser!
}
```

### Fields

#### `DesLifeCycleStage.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` this life cycle stage was created.

#### `DesLifeCycleStage.createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this life cycle stage was created by.

#### `DesLifeCycleStage.lifeCycleStageId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The reference identifier for this life cycle stage.

#### `DesLifeCycleStage.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of this life cycle stage.

#### `DesLifeCycleStage.stageIndex` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The stage index for this life cycle stage.

#### `DesLifeCycleStage.states` · [`[DesLifeCycleState!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) non-null object platform

The `DesLifeCycleState` list for this life cycle stage.

#### `DesLifeCycleStage.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The `DateTime` this life cycle stage was last updated at.

#### `DesLifeCycleStage.updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

The user this life cycle stage was last updated by.
