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

#### `projectTemplates` · [`DesProjectTemplateConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template-connection.md) object

Gets project templates.

##### `after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.
