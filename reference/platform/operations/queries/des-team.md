---
title: "desTeam"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-team"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# desTeam

Gets the specified workspace team.

```graphql
desTeam(
  workspaceUrl: String
): DesTeam!
```

### Arguments

#### `desTeam.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The workspace URL.

### Type

#### [`DesTeam`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-team.md) object platform

Information about a team in a workspace.
