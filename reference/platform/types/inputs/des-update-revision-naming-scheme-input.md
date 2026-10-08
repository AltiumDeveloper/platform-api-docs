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

#### `contentTypes` · [`[DesContentTypeKind!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-content-type-kind.md) list enum

If `isControlledPerContentType` is true, the list of content types for which this revision naming scheme is applicable.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The revision naming scheme to be updated.

#### `isControlledPerContentType` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

If true, the revision naming scheme is only applied to objects that are controlled by that content type. Otherwise, content types are ignored.

#### `itemRevisionSeparator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The separator used between item identifier and revision identifier. Allowed characters are: ',', '.', '-', '\_'.

#### `levels` · [`[DesUpdateRevisionNamingSchemeLevelInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-revision-naming-scheme-level-input.md) list input

The list of numbering levels for this revision naming scheme. Maximum of 3 levels.

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The name of this revision naming scheme.
