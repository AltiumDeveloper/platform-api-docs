---
title: "DesLifeCycleDefinitionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-definition-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesLifeCycleDefinitionInput

Input for life cycle definition.

### Member Of

[`DesCreateLifeCycleDefinitionInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-create-life-cycle-definition-input.md) input · [`DesUpdateLifeCycleDefinitionInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-life-cycle-definition-input.md) input

```graphql
input DesLifeCycleDefinitionInput {
  contentTypes: [DesContentTypeKind!]
  isControlledPerContentType: Boolean
  isRevisionSchemeAssigned: Boolean!
  name: String!
  stages: [DesLifeCycleStageInput!]
  stateTransitions: [DesLifeCycleStateTransitionInput!]
}
```

### Fields

#### `contentTypes` · [`[DesContentTypeKind!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-content-type-kind.md) list enum

Content types of life cycle definition.

#### `isControlledPerContentType` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

Returns `true` if the life cycle definition is controlled per content type.

#### `isRevisionSchemeAssigned` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Returns `true` if a revision scheme is assigned to the life cycle definition.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of life cycle definition.

#### `stages` · [`[DesLifeCycleStageInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-stage-input.md) list input

Stages of life cycle definition.

#### `stateTransitions` · [`[DesLifeCycleStateTransitionInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-state-transition-input.md) list input

State transitions of life cycle definition.
