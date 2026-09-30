---
title: "DesUpdateRevisionNamingSchemeInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-revision-naming-scheme-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateRevisionNamingSchemeInput

Input for updating revision naming scheme.

### Member Of

[`desUpdateRevisionNamingScheme`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-update-revision-naming-scheme.md) mutation

```graphql
input DesUpdateRevisionNamingSchemeInput {
  contentTypes: [DesContentTypeKind!]
  id: ID!
  isControlledPerContentType: Boolean
  itemRevisionSeparator: String
  levels: [DesUpdateRevisionNamingSchemeLevelInput!]
  name: String
}
```

### Fields

#### `DesUpdateRevisionNamingSchemeInput.contentTypes` · [`[DesContentTypeKind!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-content-type-kind.md) list enum platform

If `isControlledPerContentType` is true, the list of content types for which this revision naming scheme is applicable.

#### `DesUpdateRevisionNamingSchemeInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The revision naming scheme to be updated.

#### `DesUpdateRevisionNamingSchemeInput.isControlledPerContentType` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar common

If true, the revision naming scheme is only applied to objects that are controlled by that content type. Otherwise, content types are ignored.

#### `DesUpdateRevisionNamingSchemeInput.itemRevisionSeparator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The separator used between item identifier and revision identifier. Allowed characters are: ',', '.', '-', '\_'.

#### `DesUpdateRevisionNamingSchemeInput.levels` · [`[DesUpdateRevisionNamingSchemeLevelInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-revision-naming-scheme-level-input.md) list input platform

The list of numbering levels for this revision naming scheme. Maximum of 3 levels.

#### `DesUpdateRevisionNamingSchemeInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The name of this revision naming scheme.
