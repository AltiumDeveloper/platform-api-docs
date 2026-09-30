---
title: "GloAppFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-filter-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloAppFilterInput

Represents an Altium application.

### Member Of

[`GloAppFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-filter-input.md) input · [`gloAppInstalledApps`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-app-installed-apps.md) query · [`gloApps`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-apps.md) query

```graphql
input GloAppFilterInput {
  and: [GloAppFilterInput!]
  contactEmail: StringOperationFilterInput
  createdAt: DateTimeOperationFilterInput
  createdById: StringOperationFilterInput
  deletedAt: DateTimeOperationFilterInput
  deletedById: StringOperationFilterInput
  description: StringOperationFilterInput
  hrid: StringOperationFilterInput
  isWorkspaceApp: BooleanOperationFilterInput
  name: StringOperationFilterInput
  oAuthClient: GloOAuthClientFilterInput
  or: [GloAppFilterInput!]
  updatedAt: DateTimeOperationFilterInput
  updatedById: StringOperationFilterInput
}
```

### Fields

#### `GloAppFilterInput.and` · [`[GloAppFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-filter-input.md) list input platform

#### `GloAppFilterInput.contactEmail` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The contact email of the developer of the App.

#### `GloAppFilterInput.createdAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input common

The date-time that the App was created.

#### `GloAppFilterInput.createdById` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The ID of the User that created the App.

#### `GloAppFilterInput.deletedAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input common

The date-time that the App was deleted. Null if the App has not been deleted.

#### `GloAppFilterInput.deletedById` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The ID of the User that deleted the App. Null if the App has not been deleted.

#### `GloAppFilterInput.description` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

A description of the App.

#### `GloAppFilterInput.hrid` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The human-readable identifier for the App. Must be unique.

#### `GloAppFilterInput.isWorkspaceApp` · [`BooleanOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/boolean-operation-filter-input.md) input common

Whether the App is a Workspace PAT App.

#### `GloAppFilterInput.name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The name of the App.

#### `GloAppFilterInput.oAuthClient` · [`GloOAuthClientFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-oauth-client-filter-input.md) input platform

#### `GloAppFilterInput.or` · [`[GloAppFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-filter-input.md) list input platform

#### `GloAppFilterInput.updatedAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input common

The date-time that the App was last updated.

#### `GloAppFilterInput.updatedById` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input common

The ID of the User that last updated the App.
