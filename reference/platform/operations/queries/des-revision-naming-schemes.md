---
title: "desRevisionNamingSchemes"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-revision-naming-schemes"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# desRevisionNamingSchemes

Gets revision naming schemes.

### Type

#### [`DesRevisionNamingScheme`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-naming-scheme.md) object

Revision naming scheme details obtained by `desRevisionNamingSchemes`. More information is available on revision naming schemes at: <https://www.altium.com/documentation/altium-designer/accessing-detailed-item-view#!revision_naming_scheme_dlg>

```graphql
desRevisionNamingSchemes(
  workspaceUrl: String
): [DesRevisionNamingScheme!]!
```

### Arguments

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The workspace URL.
