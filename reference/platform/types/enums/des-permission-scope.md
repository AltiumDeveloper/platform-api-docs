---
title: "DesPermissionScope"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-permission-scope"
bounded_context: "Platform"
kind: "enums"
experimental: false
deprecated: false
---

# DesPermissionScope

Scope for permission checks (user, group, organisation, etc.).

### Member Of

[`DesFolderPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder-permission.md) object · [`DesLifeCycleStateTransitionController`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition-controller.md) object · [`DesLifeCycleStateTransitionControllerInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-life-cycle-state-transition-controller-input.md) input · [`DesProjectPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-permission.md) object · [`DesUpdateFolderPermissionInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-folder-permission-input.md) input · [`DesUpdateProjectPermissionInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-update-project-permission-input.md) input

```graphql
enum DesPermissionScope {
  ANYONE
  COLLABORATOR
  GROUP
  GUEST
  ORGANISATION
  OWNER
  USER
}
```

### Values

#### `ANYONE`

#### `COLLABORATOR`

#### `GROUP`

#### `GUEST`

#### `ORGANISATION`

#### `OWNER`

#### `USER`
