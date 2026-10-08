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

- [Lifecycle Stage](https://w3id.org/altium/cdm/platform/LifecycleStage) — A named stage that groups lifecycle states in a lifecycle definition using the Advanced management style (e.g. Design, Prototype, Production), indicating how far a revision has progressed in its development. Stages can be linked to the levels of the revision naming scheme. Definitions using the Simple style have states and transitions but no stages.
  - IRI: [`https://w3id.org/altium/cdm/platform/LifecycleStage`](https://w3id.org/altium/cdm/platform/LifecycleStage)

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

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) this life cycle stage was created.

#### `createdBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object

The user this life cycle stage was created by.

#### `lifeCycleStageId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference identifier for this life cycle stage.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of this life cycle stage.

#### `stageIndex` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

The stage index for this life cycle stage.

#### `states` · [`[DesLifeCycleState!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) non-null object

The [`DesLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) list for this life cycle stage.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) this life cycle stage was last updated at.

#### `updatedBy` · [`DesUser!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object

The user this life cycle stage was last updated by.
