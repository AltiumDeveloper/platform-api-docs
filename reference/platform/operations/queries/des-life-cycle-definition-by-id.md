---
title: "desLifeCycleDefinitionById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-life-cycle-definition-by-id"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# desLifeCycleDefinitionById

Gets a life cycle definition based on the identifier provided.

### Type

#### [`DesLifeCycleDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-definition.md) object

Revision naming scheme details obtained by [`desLifeCycleDefinitions`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-life-cycle-definitions.md).

```graphql
desLifeCycleDefinitionById(
  id: ID!
): DesLifeCycleDefinition
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The life cycle definition identifier.
