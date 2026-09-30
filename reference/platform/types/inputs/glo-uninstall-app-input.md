---
title: "GloUninstallAppInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-uninstall-app-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloUninstallAppInput

### Member Of

[`gloUninstallApp`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-uninstall-app.md) mutation

```graphql
input GloUninstallAppInput {
  id: ID!
}
```

### Fields

#### `GloUninstallAppInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The GRID identifier for the App to be uninstalled.
