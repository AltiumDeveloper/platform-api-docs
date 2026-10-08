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

### Type

#### [`DesRevisionNamingScheme`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-naming-scheme.md) object

Revision naming scheme details obtained by [`desRevisionNamingSchemes`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-revision-naming-schemes.md). More information is available on revision naming schemes at: <https://www.altium.com/documentation/altium-designer/accessing-detailed-item-view#!revision_naming_scheme_dlg>

```graphql
desRevisionNamingSchemeById(
  id: ID!
): DesRevisionNamingScheme
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The naming scheme identifier.
