---
title: "DesLifeCycleStateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-state-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesLifeCycleStateInput

Input for life cycle state.

### Member Of

[`DesLifeCycleStageInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-stage-input.md) input

```graphql
input DesLifeCycleStateInput {
  backgroundColor: DesColorInput
  description: String!
  foregroundColor: DesColorInput
  isInitialState: Boolean
  name: String!
  stateIndex: Int!
}
```

### Fields

#### `DesLifeCycleStateInput.backgroundColor` · [`DesColorInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-color-input.md) input design

Background color of life cycle state.

#### `DesLifeCycleStateInput.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Description of life cycle state.

#### `DesLifeCycleStateInput.foregroundColor` · [`DesColorInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-color-input.md) input design

Foreground color of life cycle state.

#### `DesLifeCycleStateInput.isInitialState` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

Returns `true` if this is the initial state.

#### `DesLifeCycleStateInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of life cycle state.

#### `DesLifeCycleStateInput.stateIndex` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

State index of life cycle state.
