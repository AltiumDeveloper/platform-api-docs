---
title: "DesUser"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesUser

User details with the identifier and nullable extra fields.

### Returned By

[`desUserByAuth`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-user-by-auth.md) query · [`desUserByGlobalId`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-user-by-global-id.md) query · [`desUsers`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-users.md) query

### Member Of

[`DesCollaborationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-revision.md) object · [`DesCollaborationSimulationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-collaboration-simulation-revision.md) object · [`DesComment`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment.md) object · [`DesCommentThread`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-thread.md) object · [`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object · [`DesComponentType`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-type.md) object · [`DesDatasheet`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet.md) object · [`DesFolder`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder.md) object · [`DesFolderPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-folder-permission.md) object · [`DesFootprint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint.md) object · [`DesLibrary`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-library.md) object · [`DesLifeCycleDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-definition.md) object · [`DesLifeCycleStage`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-stage.md) object · [`DesLifeCycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state.md) object · [`DesLifeCycleStateTransition`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition.md) object · [`DesLifeCycleStateTransitionController`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-life-cycle-state-transition-controller.md) object · [`DesMention`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-mention.md) object · [`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) object · [`DesProjectPermission`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-permission.md) object · [`DesRevisionNamingScheme`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-naming-scheme.md) object · [`DesRevisionNamingSchemeLevel`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-naming-scheme-level.md) object · [`DesSimulation`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-simulation.md) object · [`DesSymbol`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol.md) object · [`DesTask`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-task.md) object · [`DesTeam`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-team.md) object · [`PlatformWorkspaceRefreshToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-refresh-token.md) object · [`PlatformWorkspaceToken`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/platform-workspace-token.md) object

```graphql
type DesUser {
  email: String
  firstName: String
  globalUserId: String
  groups: [DesUserGroup!]
  lastName: String
  pictureUrl(
    size: DesUserPictureSize
  ): String
  userId: String
  userName: String
}
```

### Fields

#### `email` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Null if the user no longer exists.

#### `firstName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Null if the user no longer exists.

#### `globalUserId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The global user identifier. Common for this user across all workspaces.

#### `groups` · [`[DesUserGroup!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-user-group.md) list object

Null if the user no longer exists.

#### `lastName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Null if the user no longer exists.

#### `pictureUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Null if the user no longer exists.

##### `size` · [`DesUserPictureSize`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-user-picture-size.md) enum

The size of the picture to retrieve.

#### `userId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The workspace specific user identifier.

#### `userName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Null if the user no longer exists.
