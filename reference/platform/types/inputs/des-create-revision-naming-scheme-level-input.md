---
title: "DesCreateRevisionNamingSchemeLevelInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-create-revision-naming-scheme-level-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCreateRevisionNamingSchemeLevelInput

Input for revision naming scheme level creation.

### Member Of

[`DesCreateRevisionNamingSchemeInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-create-revision-naming-scheme-input.md) input

```graphql
input DesCreateRevisionNamingSchemeLevelInput {
  levelSeparator: String!
  minimumWidth: Int!
  name: String!
  revisionNamingPolicy: DesRevisionNamingPolicy!
}
```

### Fields

#### `DesCreateRevisionNamingSchemeLevelInput.levelSeparator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The separator prefix character for this revision naming scheme level. Allowed characters are: ',', '.', '-', '\_'.

#### `DesCreateRevisionNamingSchemeLevelInput.minimumWidth` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common

The minimum character length allowed for this revision naming scheme level.

#### `DesCreateRevisionNamingSchemeLevelInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of this revision naming level. In Altium Designer it is known as 'Caption'.

#### `DesCreateRevisionNamingSchemeLevelInput.revisionNamingPolicy` · [`DesRevisionNamingPolicy!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-revision-naming-policy.md) non-null enum platform

The naming policy for this revision naming scheme level.
