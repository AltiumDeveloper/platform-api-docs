---
title: "GloUserGroup"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloUserGroup

### Common Data Model

- [User Group](https://altiumdeveloper.github.io/cdm/classes/plt_UserGroup/) — A way to group multiple users together (e.g. for the purposes of SCIM syncrhonization). User may be a member of multiple groups.
  - GRID: `grid:global::platform:group/{id}`

### Member Of

[`GloCreateUserGroupPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-create-user-group-payload.md) object · [`GloOrganization`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-organization.md) object · [`GloUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user.md) object · [`GloUserGroupConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group-connection.md) object · [`GloUserGroupEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user-group-edge.md) object

```graphql
type GloUserGroup {
  groupMemberCount: Int
  id: ID!
  name: String
  organization: GloOrganization
  userGroupId: String
  users: [GloUser]
}
```

### Fields

#### `GloUserGroup.groupMemberCount` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Amount og group users.

#### `GloUserGroup.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Group global resource identifier.

#### `GloUserGroup.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Name of the group.

#### `GloUserGroup.organization` · [`GloOrganization`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-organization.md) object platform

Organization to which group belongs to.

#### `GloUserGroup.userGroupId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Group identifier.

#### `GloUserGroup.users` · [`[GloUser]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user.md) list object platform

List of users in the group.
