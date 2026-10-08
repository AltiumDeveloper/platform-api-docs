---
title: "DesPartAttachTagPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attach-tag-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartAttachTagPayload

Represents the payload returned after assigning a part tag to parts.

### Returned By

[`desPartAttachTag`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-attach-tag.md) mutation

```graphql
type DesPartAttachTagPayload {
  errors: [DesPartErrorPayload!]!
  isSuccessful: Boolean!
}
```

### Fields

#### `errors` · [`[DesPartErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-error-payload.md) non-null object

Errors that occurred while performing the operation.

#### `isSuccessful` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether every requested part has the tag now. Always `false` when `errors` is not empty.
