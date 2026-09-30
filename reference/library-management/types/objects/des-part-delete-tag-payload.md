---
title: "DesPartDeleteTagPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-delete-tag-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartDeleteTagPayload

Represents the payload returned after deleting a part tag.

### Returned By

[`desPartDeleteTag`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-delete-tag.md) mutation

```graphql
type DesPartDeleteTagPayload {
  deletedTagId: String
  errors: [DesPartErrorPayload!]!
}
```

### Fields

#### `DesPartDeleteTagPayload.deletedTagId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The identifier of the deleted tag. Always `null` when `errors` is not empty.

#### `DesPartDeleteTagPayload.errors` · [`[DesPartErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-error-payload.md) non-null object library-management

Errors that occurred while performing the operation.
