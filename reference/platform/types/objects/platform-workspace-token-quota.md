---
title: "PlatformWorkspaceTokenQuota"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-token-quota"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# PlatformWorkspaceTokenQuota

Represents the quota for the number of active `PlatformToken`s allowed in a Workspace.

### Returned By

[`platform.token.workspaceTokenQuota`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/platform/token/workspace-token-quota.md) query

```graphql
type PlatformWorkspaceTokenQuota {
  activeTokenCount: Int!
  maxActiveTokenCount: Int!
}
```

### Fields

#### `PlatformWorkspaceTokenQuota.activeTokenCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The current number of `PlatformToken`s active in the Workspace.

#### `PlatformWorkspaceTokenQuota.maxActiveTokenCount` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The maximum number of active `PlatformToken`s allowed in the Workspace.
