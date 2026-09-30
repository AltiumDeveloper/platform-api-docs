---
title: "desPartAttachTag"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-attach-tag"
bounded_context: "Library Management"
kind: "mutations"
experimental: false
deprecated: false
---

# desPartAttachTag

Assigns a tag to parts. Parts that already have the tag are not reported as an error.

```graphql
desPartAttachTag(
  input: DesPartAttachTagInput!
): DesPartAttachTagPayload!
```

### Arguments

#### `desPartAttachTag.input` · [`DesPartAttachTagInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-attach-tag-input.md) non-null input library-management

The tag to assign and the parts to assign it to.

### Type

#### [`DesPartAttachTagPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-attach-tag-payload.md) object library-management

Represents the payload returned after assigning a part tag to parts.
