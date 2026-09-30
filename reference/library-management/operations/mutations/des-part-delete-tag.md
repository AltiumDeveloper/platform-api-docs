---
title: "desPartDeleteTag"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-delete-tag"
bounded_context: "Library Management"
kind: "mutations"
experimental: false
deprecated: false
---

# desPartDeleteTag

Deletes a part tag. The tag has to be unassigned from every part first.

```graphql
desPartDeleteTag(
  input: DesPartDeleteTagInput!
): DesPartDeleteTagPayload!
```

### Arguments

#### `desPartDeleteTag.input` · [`DesPartDeleteTagInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-delete-tag-input.md) non-null input library-management

The tag to delete.

### Type

#### [`DesPartDeleteTagPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-delete-tag-payload.md) object library-management

Represents the payload returned after deleting a part tag.
