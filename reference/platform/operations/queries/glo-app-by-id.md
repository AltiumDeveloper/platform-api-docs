---
title: "gloAppById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-app-by-id"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# gloAppById

Gets the `GloApp` with the specified identifier.

```graphql
gloAppById(
  appId: ID!
): GloApp
```

### Arguments

#### `gloAppById.appId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The GRID identifier for the App.

### Type

#### [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object platform

Represents an Altium application.
