---
title: "DesLifeCycleStateTransitionApprovalGroup"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition-approval-group"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesLifeCycleStateTransitionApprovalGroup

Information about the life cycle state transition approval groups.

### Member Of

[`DesLifeCycleStateTransition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition.md) object

```graphql
type DesLifeCycleStateTransitionApprovalGroup {
  controllers: [DesLifeCycleStateTransitionController!]!
  name: String!
}
```

### Fields

#### `controllers` · [`[DesLifeCycleStateTransitionController!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition-controller.md) non-null object

The controllers that can provide an approval for this life cycle state transition approval group.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of this life cycle state transition approval group.
