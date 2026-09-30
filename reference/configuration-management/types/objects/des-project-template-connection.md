---
title: "DesProjectTemplateConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template-connection"
bounded_context: "Configuration Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesProjectTemplateConnection

A connection to a list of items.

### Member Of

[`DesWorkspaceConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-workspace-configuration.md) object

```graphql
type DesProjectTemplateConnection {
  edges: [DesProjectTemplateEdge!]
  nodes: [DesProjectTemplate!]
  pageInfo: PageInfo!
  totalCount: Int!
}
```

### Fields

#### `DesProjectTemplateConnection.edges` · [`[DesProjectTemplateEdge!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template-edge.md) list object configuration-management

A list of edges.

#### `DesProjectTemplateConnection.nodes` · [`[DesProjectTemplate!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template.md) list object configuration-management

A flattened list of the nodes.

#### `DesProjectTemplateConnection.pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/page-info.md) non-null object common

Information to aid in pagination.

#### `DesProjectTemplateConnection.totalCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

Identifies the total count of items in the connection.
