---
title: "DesWorkspaceLocation"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-location"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesWorkspaceLocation

A region in which workspaces can be located.

### Returned By

[`desWorkspaceLocations`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-workspace-locations.md) query

### Member Of

[`DesWorkspace`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace.md) object · [`DesWorkspaceInfo`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-info.md) object

```graphql
type DesWorkspaceLocation {
  apiServiceUrl: String!
  apiVoyagerUrl: String!
  filesServiceUrl: String!
  name: String!
}
```

### Fields

#### `DesWorkspaceLocation.apiServiceUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The preferred Nexar API URL to use for this location.

#### `DesWorkspaceLocation.apiVoyagerUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The voyager API schema explorer URL for this location.

#### `DesWorkspaceLocation.filesServiceUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The preferred files service URL to use for this location.

#### `DesWorkspaceLocation.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the location.
