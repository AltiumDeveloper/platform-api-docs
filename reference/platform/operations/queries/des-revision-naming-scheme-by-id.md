---
title: "desRevisionNamingSchemeById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-revision-naming-scheme-by-id"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# desRevisionNamingSchemeById

Gets a revision naming scheme based on the identifier provided.

```graphql
desRevisionNamingSchemeById(
  id: ID!
): DesRevisionNamingScheme
```

### Arguments

#### `desRevisionNamingSchemeById.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The naming scheme identifier.

### Type

#### [`DesRevisionNamingScheme`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-naming-scheme.md) object platform

Revision naming scheme details obtained by `desRevisionNamingSchemes`. More information is available on revision naming schemes at: <https://www.altium.com/documentation/altium-designer/accessing-detailed-item-view#!revision_naming_scheme_dlg>
