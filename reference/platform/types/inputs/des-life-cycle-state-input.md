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

#### `backgroundColor` · [`DesColorInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-color-input.md) input Design

Background color of life cycle state.

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Description of life cycle state.

#### `foregroundColor` · [`DesColorInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-color-input.md) input Design

Foreground color of life cycle state.

#### `isInitialState` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Returns `true` if this is the initial state.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of life cycle state.

#### `stateIndex` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar

State index of life cycle state.
