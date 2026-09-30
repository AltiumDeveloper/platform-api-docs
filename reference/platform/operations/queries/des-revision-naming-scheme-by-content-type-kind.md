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

```graphql
desRevisionNamingSchemeByContentTypeKind(
  kind: DesContentTypeKind!
  workspaceUrl: String
): DesRevisionNamingScheme!
```

### Arguments

#### `desRevisionNamingSchemeByContentTypeKind.kind` · [`DesContentTypeKind!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-content-type-kind.md) non-null enum platform

The content kind.

#### `desRevisionNamingSchemeByContentTypeKind.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The workspace URL.

### Type

#### [`DesRevisionNamingScheme`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-revision-naming-scheme.md) object platform

Revision naming scheme details obtained by `desRevisionNamingSchemes`. More information is available on revision naming schemes at: <https://www.altium.com/documentation/altium-designer/accessing-detailed-item-view#!revision_naming_scheme_dlg>
