---
title: "desSettings"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-settings"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# desSettings

Gets the specified settings.

### Type

#### [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

```graphql
desSettings(
  names: [String!]!
  workspaceUrl: String
): [String]!
```

### Arguments

#### `names` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The setting names to retrieve.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The workspace URL.
