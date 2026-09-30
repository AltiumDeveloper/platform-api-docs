---
title: "desPartDetachTag"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-detach-tag"
bounded_context: "Library Management"
kind: "mutations"
experimental: false
deprecated: false
---

# desPartDetachTag

Unassigns a tag from parts. Parts that do not have the tag are not reported as an error.

```graphql
desPartDetachTag(
  input: DesPartDetachTagInput!
): DesPartDetachTagPayload!
```

### Arguments

#### `desPartDetachTag.input` · [`DesPartDetachTagInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-detach-tag-input.md) non-null input library-management

The tag to unassign and the parts to unassign it from.

### Type

#### [`DesPartDetachTagPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-detach-tag-payload.md) object library-management

Represents the payload returned after unassigning a part tag from parts.
