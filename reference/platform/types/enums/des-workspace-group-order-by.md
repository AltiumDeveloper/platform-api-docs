---
title: "DesWorkspaceGroupOrderBy"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-workspace-group-order-by"
bounded_context: "Platform"
kind: "enums"
experimental: false
deprecated: false
---

# DesWorkspaceGroupOrderBy

Specifies the sort order field for the result set of workspace groups.

```graphql
enum DesWorkspaceGroupOrderBy {
  CREATED_AT
  GROUP_ID
  NAME
}
```

### Values

#### `DesWorkspaceGroupOrderBy.CREATED_AT`

Order by the date of creation of the group.

#### `DesWorkspaceGroupOrderBy.GROUP_ID`

Order by the workspace specific group identifier.

#### `DesWorkspaceGroupOrderBy.NAME`

Order by the group name.
