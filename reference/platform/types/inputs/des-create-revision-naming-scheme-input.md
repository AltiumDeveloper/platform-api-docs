---
title: "DesCreateRevisionNamingSchemeInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-create-revision-naming-scheme-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCreateRevisionNamingSchemeInput

Input for revision naming scheme creation.

### Member Of

[`desCreateRevisionNamingScheme`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-create-revision-naming-scheme.md) mutation

```graphql
input DesCreateRevisionNamingSchemeInput {
  contentTypes: [DesContentTypeKind!]
  isControlledPerContentType: Boolean
  itemRevisionSeparator: String!
  levels: [DesCreateRevisionNamingSchemeLevelInput!]!
  name: String!
  workspaceUrl: String
}
```

### Fields

#### `contentTypes` · [`[DesContentTypeKind!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-content-type-kind.md) list enum

If `isControlledPerContentType` is true, the list of content types for which this revision naming scheme is applicable.

#### `isControlledPerContentType` · [`Boolean`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) scalar

If true, the revision naming scheme is only applicable to objects of the content types specified by `contentTypes`.

#### `itemRevisionSeparator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The separator used between item identifier and revision identifier. Allowed characters are: ',', '.', '-', '\_'.

#### `levels` · [`[DesCreateRevisionNamingSchemeLevelInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-create-revision-naming-scheme-level-input.md) non-null input

The list of numbering levels for this revision naming scheme. Maximum of 3 levels.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of this revision naming scheme.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The workspace URL that the revision naming scheme should be created on.
