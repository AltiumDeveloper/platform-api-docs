---
title: "desWorkspaceConfiguration"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/operations/queries/des-workspace-configuration"
bounded_context: "Configuration Management"
kind: "queries"
experimental: false
deprecated: false
---

# desWorkspaceConfiguration

Gets the workspace configuration.

```graphql
desWorkspaceConfiguration(
  workspaceUrl: String
): DesWorkspaceConfiguration!
```

### Arguments

#### `desWorkspaceConfiguration.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The workspace URL.

### Type

#### [`DesWorkspaceConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-workspace-configuration.md) object configuration-management

Information about workspace configuration.
