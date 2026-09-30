---
title: "DesPartDetachTagPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-detach-tag-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartDetachTagPayload

Represents the payload returned after unassigning a part tag from parts.

### Returned By

[`desPartDetachTag`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-detach-tag.md) mutation

```graphql
type DesPartDetachTagPayload {
  errors: [DesPartErrorPayload!]!
  isSuccessful: Boolean!
}
```

### Fields

#### `DesPartDetachTagPayload.errors` · [`[DesPartErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-error-payload.md) non-null object library-management

Errors that occurred while performing the operation.

#### `DesPartDetachTagPayload.isSuccessful` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar common

Indicates whether none of the requested parts has the tag anymore. Always `false` when `errors` is not empty.
