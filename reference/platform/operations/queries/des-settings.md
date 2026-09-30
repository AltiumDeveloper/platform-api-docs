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

```graphql
desSettings(
  names: [String!]!
  workspaceUrl: String
): [String]!
```

### Arguments

#### `desSettings.names` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The setting names to retrieve.

#### `desSettings.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The workspace URL.

### Type

#### [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
