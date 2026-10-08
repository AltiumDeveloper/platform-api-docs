---
title: "DesPartCreateTagPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-create-tag-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPartCreateTagPayload

Represents the payload returned after creating a part tag.

### Returned By

[`desPartCreateTag`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-create-tag.md) mutation

```graphql
type DesPartCreateTagPayload {
  errors: [DesPartErrorPayload!]!
  tag: DesPartTag
}
```

### Fields

#### `errors` · [`[DesPartErrorPayload!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-error-payload.md) non-null object

Errors that occurred while performing the operation.

#### `tag` · [`DesPartTag`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-tag.md) object

The created tag. Always `null` when `errors` is not empty.
