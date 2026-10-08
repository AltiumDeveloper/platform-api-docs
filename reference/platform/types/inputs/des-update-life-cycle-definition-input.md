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

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Life cycle definition identifier. Defines which life cycle definition should be updated.

#### `lifeCycleDefinition` · [`DesLifeCycleDefinitionInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-definition-input.md) non-null input

Life cycle definition.
