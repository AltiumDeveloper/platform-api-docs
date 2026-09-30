---
title: "DesUpdateRevisionNamingSchemeLevelInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-revision-naming-scheme-level-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateRevisionNamingSchemeLevelInput

Input for updating revision naming scheme level.

### Member Of

[`DesUpdateRevisionNamingSchemeInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-revision-naming-scheme-input.md) input

```graphql
input DesUpdateRevisionNamingSchemeLevelInput {
  levelSeparator: String
  minimumWidth: Int
  name: String
  revisionNamingPolicy: DesRevisionNamingPolicy
}
```

### Fields

#### `DesUpdateRevisionNamingSchemeLevelInput.levelSeparator` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The separator prefix character for this revision naming scheme level. Allowed characters are: ',', '.', '-', '\_'.

#### `DesUpdateRevisionNamingSchemeLevelInput.minimumWidth` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

The minimum character length allowed for this revision naming scheme level.

#### `DesUpdateRevisionNamingSchemeLevelInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The name of this revision naming level. In Altium Designer it is known as 'Caption'.

#### `DesUpdateRevisionNamingSchemeLevelInput.revisionNamingPolicy` · [`DesRevisionNamingPolicy`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/enums/des-revision-naming-policy.md) enum platform

The naming policy for this revision naming scheme level.
