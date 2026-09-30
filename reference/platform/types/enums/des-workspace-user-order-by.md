---
title: "DesWorkspaceUserOrderBy"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-user-order-by"
bounded_context: "Platform"
kind: "enums"
experimental: false
deprecated: false
---

# DesWorkspaceUserOrderBy

Specifies the sort order field for the result set of workspace members.

```graphql
enum DesWorkspaceUserOrderBy {
  DISPLAY_NAME
  EMAIL
  USER_ID
}
```

### Values

#### `DesWorkspaceUserOrderBy.DISPLAY_NAME`

Order by the user display name.

#### `DesWorkspaceUserOrderBy.EMAIL`

Order by the user email.

#### `DesWorkspaceUserOrderBy.USER_ID`

Order by the workspace specific user id.
