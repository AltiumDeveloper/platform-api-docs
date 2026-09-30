---
title: "DesDeleteLifeCycleDefinitionInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-delete-life-cycle-definition-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesDeleteLifeCycleDefinitionInput

Input for deleting a life cycle definition.

### Member Of

[`desDeleteLifeCycleDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-delete-life-cycle-definition.md) mutation

```graphql
input DesDeleteLifeCycleDefinitionInput {
  id: ID!
}
```

### Fields

#### `DesDeleteLifeCycleDefinitionInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Defines which life cycle definition should be deleted.
