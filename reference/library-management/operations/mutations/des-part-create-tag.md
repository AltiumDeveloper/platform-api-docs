---
title: "desPartCreateTag"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-create-tag"
bounded_context: "Library Management"
kind: "mutations"
experimental: false
deprecated: false
---

# desPartCreateTag

Creates a tag that can be assigned to parts.

### Type

#### [`DesPartCreateTagPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-create-tag-payload.md) object

Represents the payload returned after creating a part tag.

```graphql
desPartCreateTag(
  input: DesPartCreateTagInput!
): DesPartCreateTagPayload!
```

### Arguments

#### `input` · [`DesPartCreateTagInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-create-tag-input.md) non-null input

The tag to create.
