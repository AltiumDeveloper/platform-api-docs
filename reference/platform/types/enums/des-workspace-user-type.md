---
title: "DesWorkspaceUserType"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-user-type"
bounded_context: "Platform"
kind: "enums"
experimental: false
deprecated: false
---

# DesWorkspaceUserType

Specifies the type of the user in the workspace.

### Member Of

[`DesWorkspaceUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace-user.md) object · [`DesWorkspaceUserFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-workspace-user-filter-input.md) input

```graphql
enum DesWorkspaceUserType {
  WORKSPACE_GUEST
  WORKSPACE_MEMBER
}
```

### Values

#### `WORKSPACE_GUEST`

The user is a workspace guest, i.e. a user some limitations apply, compared to the regular workspace members.

#### `WORKSPACE_MEMBER`

The user is a regular workspace member.
