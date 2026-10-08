---
title: "GloAppSortInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-sort-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloAppSortInput

Represents an Altium application.

### Member Of

[`gloAppInstalledApps`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-app-installed-apps.md) query · [`gloApps`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-apps.md) query

```graphql
input GloAppSortInput {
  contactEmail: SortEnumType
  createdAt: SortEnumType
  createdById: SortEnumType
  deletedAt: SortEnumType
  deletedById: SortEnumType
  description: SortEnumType
  hrid: SortEnumType
  isWorkspaceApp: SortEnumType
  name: SortEnumType
  oAuthClient: GloOAuthClientSortInput
  updatedAt: SortEnumType
  updatedById: SortEnumType
}
```

### Fields

#### `contactEmail` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The contact email of the developer of the App.

#### `createdAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The date-time that the App was created.

#### `createdById` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The ID of the User that created the App.

#### `deletedAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The date-time that the App was deleted. Null if the App has not been deleted.

#### `deletedById` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The ID of the User that deleted the App. Null if the App has not been deleted.

#### `description` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

A description of the App.

#### `hrid` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The human-readable identifier for the App. Must be unique.

#### `isWorkspaceApp` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

Whether the App is a Workspace PAT App.

#### `name` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The name of the App.

#### `oAuthClient` · [`GloOAuthClientSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-oauth-client-sort-input.md) input

#### `updatedAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The date-time that the App was last updated.

#### `updatedById` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum

The ID of the User that last updated the App.
