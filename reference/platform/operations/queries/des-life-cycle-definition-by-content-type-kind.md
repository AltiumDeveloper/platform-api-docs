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

```graphql
desLifeCycleDefinitionByContentTypeKind(
  kind: DesContentTypeKind!
  workspaceUrl: String
): DesLifeCycleDefinition!
```

### Arguments

#### `desLifeCycleDefinitionByContentTypeKind.kind` · [`DesContentTypeKind!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-content-type-kind.md) non-null enum platform

The content kind.

#### `desLifeCycleDefinitionByContentTypeKind.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The workspace URL.

### Type

#### [`DesLifeCycleDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-definition.md) object platform

Revision naming scheme details obtained by `desLifeCycleDefinitions`.
