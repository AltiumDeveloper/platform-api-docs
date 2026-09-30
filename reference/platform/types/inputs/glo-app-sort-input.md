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

#### `GloAppSortInput.contactEmail` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

The contact email of the developer of the App.

#### `GloAppSortInput.createdAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

The date-time that the App was created.

#### `GloAppSortInput.createdById` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

The ID of the User that created the App.

#### `GloAppSortInput.deletedAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

The date-time that the App was deleted. Null if the App has not been deleted.

#### `GloAppSortInput.deletedById` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

The ID of the User that deleted the App. Null if the App has not been deleted.

#### `GloAppSortInput.description` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

A description of the App.

#### `GloAppSortInput.hrid` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

The human-readable identifier for the App. Must be unique.

#### `GloAppSortInput.isWorkspaceApp` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

Whether the App is a Workspace PAT App.

#### `GloAppSortInput.name` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

The name of the App.

#### `GloAppSortInput.oAuthClient` · [`GloOAuthClientSortInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-oauth-client-sort-input.md) input platform

#### `GloAppSortInput.updatedAt` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

The date-time that the App was last updated.

#### `GloAppSortInput.updatedById` · [`SortEnumType`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/enums/sort-enum-type.md) enum common

The ID of the User that last updated the App.
