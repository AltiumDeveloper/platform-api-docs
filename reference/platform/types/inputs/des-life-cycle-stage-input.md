---
title: "DesLifeCycleStageInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-stage-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesLifeCycleStageInput

Input for life cycle stage.

### Member Of

[`DesLifeCycleDefinitionInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-definition-input.md) input

```graphql
input DesLifeCycleStageInput {
  name: String!
  stageIndex: Int!
  states: [DesLifeCycleStateInput!]!
}
```

### Fields

#### `DesLifeCycleStageInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of life cycle stage.

#### `DesLifeCycleStageInput.stageIndex` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Index of life cycle stage.

#### `DesLifeCycleStageInput.states` · [`[DesLifeCycleStateInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-state-input.md) non-null input platform

States of life cycle stage.
