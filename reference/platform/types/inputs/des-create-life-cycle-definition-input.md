---
title: "DesCreateLifeCycleDefinitionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-create-life-cycle-definition-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCreateLifeCycleDefinitionInput

Input for creating a life cycle definition.

### Member Of

[`desCreateLifeCycleDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-create-life-cycle-definition.md) mutation

```graphql
input DesCreateLifeCycleDefinitionInput {
  lifeCycleDefinition: DesLifeCycleDefinitionInput!
  workspaceUrl: String
}
```

### Fields

#### `DesCreateLifeCycleDefinitionInput.lifeCycleDefinition` · [`DesLifeCycleDefinitionInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-definition-input.md) non-null input platform

The life cycle definition to create.

#### `DesCreateLifeCycleDefinitionInput.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Defines which workspace the life cycle definition should be created on.
