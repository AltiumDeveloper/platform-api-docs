---
title: "DesVcsRevisionFileChange"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-vcs-revision-file-change"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesVcsRevisionFileChange

Describes the file affected by a VCS revision.

### Member Of

[`DesVcsRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-vcs-revision.md) object

```graphql
type DesVcsRevisionFileChange {
  kind: DesVcsChangeKind!
  path: String!
}
```

### Fields

#### `kind` · [`DesVcsChangeKind!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-vcs-change-kind.md) non-null enum

VCS revision file change kind.

#### `path` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

VCS revision file path.
