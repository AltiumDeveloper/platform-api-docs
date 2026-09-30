---
title: "gloAppInstalledApps"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-app-installed-apps"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# gloAppInstalledApps

Gets a list of `GloApp` installed in a workspace.

```graphql
gloAppInstalledApps(
  order: [GloAppSortInput!]
  where: GloAppFilterInput
): [GloApp!]
```

### Arguments

#### `gloAppInstalledApps.order` · [`[GloAppSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-sort-input.md) list input platform

#### `gloAppInstalledApps.where` · [`GloAppFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-filter-input.md) input platform

### Type

#### [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object platform

Represents an Altium application.
