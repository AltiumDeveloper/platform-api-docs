---
title: "DesTeam"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-team"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesTeam

Information about a team in a workspace.

### Returned By

[`desTeam`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-team.md) query

### Member Of

[`DesWorkspace`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-workspace.md) object

```graphql
type DesTeam {
  groups: [DesUserGroup!]!
  users: [DesUser!]!
}
```

### Fields

#### `DesTeam.groups` · [`[DesUserGroup!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user-group.md) non-null object platform

List of user groups in the team.

#### `DesTeam.users` · [`[DesUser!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user.md) non-null object platform

List of users in the team.
