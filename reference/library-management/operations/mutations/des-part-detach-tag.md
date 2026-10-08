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

### Type

#### [`DesPartDetachTagPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-detach-tag-payload.md) object

Represents the payload returned after unassigning a part tag from parts.

```graphql
desPartDetachTag(
  input: DesPartDetachTagInput!
): DesPartDetachTagPayload!
```

### Arguments

#### `input` · [`DesPartDetachTagInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-detach-tag-input.md) non-null input

The tag to unassign and the parts to unassign it from.
