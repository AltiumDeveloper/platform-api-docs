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

#### `and` · [`[GloAppFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-filter-input.md) list input

#### `contactEmail` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The contact email of the developer of the App.

#### `createdAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input

The date-time that the App was created.

#### `createdById` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The ID of the User that created the App.

#### `deletedAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input

The date-time that the App was deleted. Null if the App has not been deleted.

#### `deletedById` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The ID of the User that deleted the App. Null if the App has not been deleted.

#### `description` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

A description of the App.

#### `hrid` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The human-readable identifier for the App. Must be unique.

#### `isWorkspaceApp` · [`BooleanOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/boolean-operation-filter-input.md) input

Whether the App is a Workspace PAT App.

#### `name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The name of the App.

#### `oAuthClient` · [`GloOAuthClientFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-oauth-client-filter-input.md) input

#### `or` · [`[GloAppFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-filter-input.md) list input

#### `updatedAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input

The date-time that the App was last updated.

#### `updatedById` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The ID of the User that last updated the App.
