---
title: "DesLifeCycleStateTransitionKind"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-life-cycle-state-transition-kind"
bounded_context: "Platform"
kind: "enums"
experimental: false
deprecated: false
---

# DesLifeCycleStateTransitionKind

The kind of life cycle state transition.

### Member Of

[`DesLifeCycleStateTransition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition.md) object

```graphql
enum DesLifeCycleStateTransitionKind {
  APPROVALS
  CONTROLLED
}
```

### Values

#### `APPROVALS`

The transition can be applied subject to receiving approvals granted by some approval groups.

#### `CONTROLLED`

The transition can be applied subject to default server permissions.
