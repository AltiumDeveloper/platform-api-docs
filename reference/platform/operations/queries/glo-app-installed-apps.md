---
title: "gloAppInstalledApps"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-app-installed-apps"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# gloAppInstalledApps

Gets a list of [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) installed in a workspace.

### Type

#### [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object

Represents an Altium application.

```graphql
gloAppInstalledApps(
  order: [GloAppSortInput!]
  where: GloAppFilterInput
): [GloApp!]
```

### Arguments

#### `order` · [`[GloAppSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-sort-input.md) list input

#### `where` · [`GloAppFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-app-filter-input.md) input
