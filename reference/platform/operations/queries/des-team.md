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

### Type

#### [`DesTeam`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-team.md) object

Information about a team in a workspace.

```graphql
desTeam(
  workspaceUrl: String
): DesTeam!
```

### Arguments

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The workspace URL.
