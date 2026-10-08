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

- [User Group](https://w3id.org/altium/cdm/platform/UserGroup) — A named group of users within an organization's Company Account, managed in the Company Dashboard. Licenses can be allocated to a group so that its members can use them, and the Group Administrators system group gives its members Dashboard administration rights. A user can belong to any number of groups, groups can be provisioned from an identity provider via SCIM, and they are distinct from the groups defined inside a Workspace.

  - IRI: [`https://w3id.org/altium/cdm/platform/UserGroup`](https://w3id.org/altium/cdm/platform/UserGroup)
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

#### `groupMemberCount` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar

Amount og group users.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Group global resource identifier.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Name of the group.

#### `organization` · [`GloOrganization`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-organization.md) object

Organization to which group belongs to.

#### `userGroupId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Group identifier.

#### `users` · [`[GloUser]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user.md) list object

List of users in the group.
