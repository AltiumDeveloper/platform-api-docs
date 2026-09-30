---
title: "desLifeCycleDefinitions"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-life-cycle-definitions"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# desLifeCycleDefinitions

Gets life cycle definitions.

```graphql
desLifeCycleDefinitions(
  workspaceUrl: String
): [DesLifeCycleDefinition!]!
```

### Arguments

#### `desLifeCycleDefinitions.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The workspace URL.

### Type

#### [`DesLifeCycleDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-definition.md) object platform

Revision naming scheme details obtained by `desLifeCycleDefinitions`.
