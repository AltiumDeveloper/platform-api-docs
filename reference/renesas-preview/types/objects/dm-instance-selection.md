---
title: "DmInstanceSelection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-instance-selection"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmInstanceSelection

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Selected instance details and its pin assignments.

### Member Of

[`DmResolverResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-resolver-result.md) object

```graphql
type DmInstanceSelection {
  groupName: String
  instanceName: String!
  modeName: String!
  pins: [DmPinAssignment!]!
}
```

### Fields

#### `groupName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Completed op-mode group name that this selection belongs to, if any.

#### `instanceName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the selected peripheral instance (e.g., SCI0).

#### `modeName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Selected mode/group for this instance.

#### `pins` · [`[DmPinAssignment!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-pin-assignment.md) non-null object

Pin function to port assignments realized by this selection.
