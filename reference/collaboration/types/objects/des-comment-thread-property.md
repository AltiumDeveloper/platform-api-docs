---
title: "DesCommentThreadProperty"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-thread-property"
bounded_context: "Collaboration"
kind: "objects"
experimental: false
deprecated: false
---

# DesCommentThreadProperty

Comment thread metadata entry.

### Member Of

[`DesCommentThread`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/objects/des-comment-thread.md) object

```graphql
type DesCommentThreadProperty {
  name: String!
  value: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Parameter name.

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Parameter value.
