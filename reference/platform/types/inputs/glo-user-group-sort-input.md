---
title: "GloUserGroupSortInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-user-group-sort-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloUserGroupSortInput

### Member Of

[`gloUserGroups`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-user-groups.md) query

```graphql
input GloUserGroupSortInput {
  name: SortEnumType
  userGroupId: SortEnumType
}
```

### Fields

#### `GloUserGroupSortInput.name` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

Name of the group.

#### `GloUserGroupSortInput.userGroupId` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

Group identifier.
