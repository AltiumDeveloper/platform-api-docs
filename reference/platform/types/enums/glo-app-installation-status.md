---
title: "GloAppInstallationStatus"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/glo-app-installation-status"
bounded_context: "Platform"
kind: "enums"
experimental: false
deprecated: false
---

# GloAppInstallationStatus

Whether a [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) is installed in the current Workspace.

### Returned By

[`gloAppInstallationStatus`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-app-installation-status.md) query

```graphql
enum GloAppInstallationStatus {
  AUTO_INSTALLED
  INSTALLED
  NOT_INSTALLED
}
```

### Values

#### `AUTO_INSTALLED`

The App is auto-installable, so it is installed in all Workspaces.

#### `INSTALLED`

The App is installed in this Workspace specifically.

#### `NOT_INSTALLED`

The App is not installed in the Workspace.
