---
title: "gloAppById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-app-by-id"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# gloAppById

Gets the [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) with the specified identifier.

### Type

#### [`GloApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-app.md) object

Represents an Altium application.

```graphql
gloAppById(
  appId: ID!
): GloApp
```

### Arguments

#### `appId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The GRID identifier for the App.
