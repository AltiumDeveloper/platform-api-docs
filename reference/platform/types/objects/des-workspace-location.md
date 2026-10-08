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

#### `apiServiceUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The preferred Nexar API URL to use for this location.

#### `apiVoyagerUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The voyager API schema explorer URL for this location.

#### `filesServiceUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The preferred files service URL to use for this location.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the location.
