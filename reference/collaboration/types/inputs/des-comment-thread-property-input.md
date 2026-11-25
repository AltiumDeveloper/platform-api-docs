---
title: "DesCommentThreadPropertyInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-comment-thread-property-input"
bounded_context: "Collaboration"
kind: "inputs"
experimental: false
deprecated: false
---

# DesCommentThreadPropertyInput

A custom property to set on a comment thread.

### Member Of

[`DesCreateCommentThreadInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-create-comment-thread-input.md) input · [`DesUpdateCommentThreadInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/types/inputs/des-update-comment-thread-input.md) input

```graphql
input DesCommentThreadPropertyInput {
  name: String!
  value: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Property name. Must start with \*ext.\*, be at most 254 characters and not contain \*/\*, \*\~\*, \*:\* or whitespace. Names are case-sensitive.

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Property value. Values up to 4000 characters are accepted on every deployment. Avoid spaces, \*:\* and \*|\* in values you may want to filter on.
