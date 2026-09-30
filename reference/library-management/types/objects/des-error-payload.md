---
title: "DesErrorPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-error-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesErrorPayload

Payload associated with error.

### Implemented By

[`DesUnionPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/unions/des-union-payload.md) union

```graphql
type DesErrorPayload {
  message: String!
}
```

### Fields

#### `DesErrorPayload.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Error message.
