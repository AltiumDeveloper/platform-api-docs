---
title: "platform.token.workspaceTokenQuota"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/platform/token/workspace-token-quota"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# platform.token.workspaceTokenQuota

Gets the [`PlatformToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/platform-token.md) quota for the Workspace.

```graphql
platform {
  token {
    workspaceTokenQuota: PlatformWorkspaceTokenQuota
  }
}
```

### Type

#### [`PlatformWorkspaceTokenQuota`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-token-quota.md) object

Represents the quota for the number of active `PlatformToken`s allowed in a Workspace.
