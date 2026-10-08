---
title: "desRevisionNamingSchemeByContentTypeKind"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-revision-naming-scheme-by-content-type-kind"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# desRevisionNamingSchemeByContentTypeKind

Gets the first allowed naming scheme by the content kind.

### Type

#### [`DesRevisionNamingScheme`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-naming-scheme.md) object

Revision naming scheme details obtained by [`desRevisionNamingSchemes`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/des-revision-naming-schemes.md). More information is available on revision naming schemes at: <https://www.altium.com/documentation/altium-designer/accessing-detailed-item-view#!revision_naming_scheme_dlg>

```graphql
desRevisionNamingSchemeByContentTypeKind(
  kind: DesContentTypeKind!
  workspaceUrl: String
): DesRevisionNamingScheme!
```

### Arguments

#### `kind` · [`DesContentTypeKind!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-content-type-kind.md) non-null enum

The content kind.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The workspace URL.
