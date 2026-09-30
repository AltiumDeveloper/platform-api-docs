---
title: "DesWorkspaceConfiguration"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-workspace-configuration"
bounded_context: "Configuration Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceConfiguration

Information about workspace configuration.

### Returned By

[`desWorkspaceConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/operations/queries/des-workspace-configuration.md) query

### Member Of

[`DesWorkspace`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace.md) object

```graphql
type DesWorkspaceConfiguration {
  projectTemplates(
    after: String
    before: String
    first: Int
    last: Int
  ): DesProjectTemplateConnection
}
```

### Fields

#### `DesWorkspaceConfiguration.projectTemplates` · [`DesProjectTemplateConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template-connection.md) object configuration-management

Gets project templates.

##### `DesWorkspaceConfiguration.projectTemplates.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesWorkspaceConfiguration.projectTemplates.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `DesWorkspaceConfiguration.projectTemplates.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesWorkspaceConfiguration.projectTemplates.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.
