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

### Type

#### [`DesLifeCycleDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-definition.md) object

Revision naming scheme details obtained by `desLifeCycleDefinitions`.

```graphql
desLifeCycleDefinitions(
  workspaceUrl: String
): [DesLifeCycleDefinition!]!
```

### Arguments

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The workspace URL.
