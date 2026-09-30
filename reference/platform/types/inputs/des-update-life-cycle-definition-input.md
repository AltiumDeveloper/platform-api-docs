---
title: "DesUpdateLifeCycleDefinitionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-life-cycle-definition-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateLifeCycleDefinitionInput

Input for updating life cycle definition.

### Member Of

[`desUpdateLifeCycleDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-update-life-cycle-definition.md) mutation

```graphql
input DesUpdateLifeCycleDefinitionInput {
  id: ID!
  lifeCycleDefinition: DesLifeCycleDefinitionInput!
}
```

### Fields

#### `DesUpdateLifeCycleDefinitionInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Life cycle definition identifier. Defines which life cycle definition should be updated.

#### `DesUpdateLifeCycleDefinitionInput.lifeCycleDefinition` · [`DesLifeCycleDefinitionInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-definition-input.md) non-null input platform

Life cycle definition.
