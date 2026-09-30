---
title: "DesProjectGuestEdge"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-guest-edge"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesProjectGuestEdge

An edge in a connection.

### Member Of

[`DesProjectGuestConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-guest-connection.md) object

```graphql
type DesProjectGuestEdge {
  cursor: String!
  node: DesProjectGuest!
}
```

### Fields

#### `DesProjectGuestEdge.cursor` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A cursor for use in pagination.

#### `DesProjectGuestEdge.node` · [`DesProjectGuest!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-guest.md) non-null object design

The item at the end of the edge.
