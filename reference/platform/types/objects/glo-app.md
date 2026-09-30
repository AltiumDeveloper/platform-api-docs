---
title: "GloApp"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloApp

Represents an Altium application.

### Common Data Model

- [Application](https://altiumdeveloper.github.io/cdm/classes/plt_Application/)
  - GRID: `grid:global::platform:application/{id}`

### Returned By

[`gloAppByClientId`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-app-by-client-id.md) query · [`gloAppById`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-app-by-id.md) query · [`gloAppInstalledApps`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-app-installed-apps.md) query

### Member Of

[`GloAddAppClientSecretPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-add-app-client-secret-payload.md) object · [`GloAddAppGrantTypePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-add-app-grant-type-payload.md) object · [`GloAddAppRedirectUriPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-add-app-redirect-uri-payload.md) object · [`GloAddAppScopePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-add-app-scope-payload.md) object · [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object · [`GloAppsConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-apps-connection.md) object · [`GloAppsEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-apps-edge.md) object · [`GloCreateAppFromOAuthClientPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-create-app-from-oauth-client-payload.md) object · [`GloCreateAppPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-create-app-payload.md) object · [`GloInstallAppPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-install-app-payload.md) object · [`GloRemoveAppClientSecretPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-remove-app-client-secret-payload.md) object · [`GloRemoveAppGrantTypePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-remove-app-grant-type-payload.md) object · [`GloRemoveAppRedirectUriPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-remove-app-redirect-uri-payload.md) object · [`GloRemoveAppScopePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-remove-app-scope-payload.md) object · [`GloRestoreAppPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-restore-app-payload.md) object · [`GloUninstallAppPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-uninstall-app-payload.md) object · [`GloUpdateAppContactEmailPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-update-app-contact-email-payload.md) object · [`GloUpdateAppDescriptionPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-update-app-description-payload.md) object · [`GloUpdateAppHridPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-update-app-hrid-payload.md) object · [`GloUpdateAppNamePayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-update-app-name-payload.md) object

```graphql
type GloApp {
  contactEmail: String!
  createdAt: DateTime!
  createdById: String!
  deletedAt: DateTime
  deletedById: String
  description: String!
  hrid: String!
  id: ID!
  isWorkspaceApp: Boolean!
  name: String!
  oAuthClient: GloOAuthClient!
  tokenExchangeSources: [GloApp!]!
  updatedAt: DateTime!
  updatedById: String!
}
```

### Fields

#### `GloApp.contactEmail` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The contact email of the developer of the App.

#### `GloApp.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The date-time that the App was created.

#### `GloApp.createdById` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The ID of the User that created the App.

#### `GloApp.deletedAt` · [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) scalar common

The date-time that the App was deleted. Null if the App has not been deleted.

#### `GloApp.deletedById` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The ID of the User that deleted the App. Null if the App has not been deleted.

#### `GloApp.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

A description of the App.

#### `GloApp.hrid` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The human-readable identifier for the App. Must be unique.

#### `GloApp.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The GRID identifier for the App.

#### `GloApp.isWorkspaceApp` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Whether the App is a Workspace PAT App.

#### `GloApp.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the App.

#### `GloApp.oAuthClient` · [`GloOAuthClient!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-oauth-client.md) non-null object platform

Represents the \*OAuth 2.0 client\* for this `GloApp`.

#### `GloApp.tokenExchangeSources` · [`[GloApp!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) non-null object platform

Apps whose tokens can be exchanged to this app.

#### `GloApp.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The date-time that the App was last updated.

#### `GloApp.updatedById` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The ID of the User that last updated the App.
