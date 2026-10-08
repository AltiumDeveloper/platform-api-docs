---
title: "desLifeCycleDefinitionByContentTypeKind"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-life-cycle-definition-by-content-type-kind"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# desLifeCycleDefinitionByContentTypeKind

Gets the first allowed life cycle by the content kind.

### Type

#### [`DesLifeCycleDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-definition.md) object

Revision naming scheme details obtained by [`desLifeCycleDefinitions`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-life-cycle-definitions.md).

```graphql
desLifeCycleDefinitionByContentTypeKind(
  kind: DesContentTypeKind!
  workspaceUrl: String
): DesLifeCycleDefinition!
```

### Arguments

#### `kind` · [`DesContentTypeKind!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-content-type-kind.md) non-null enum

The content kind.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The workspace URL.
