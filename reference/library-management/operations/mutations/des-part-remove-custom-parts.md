---
title: "desPartRemoveCustomParts"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-part-remove-custom-parts"
bounded_context: "Library Management"
kind: "mutations"
experimental: false
deprecated: false
---

# desPartRemoveCustomParts

Removes custom part by the given identifiers.

### Type

#### [`DesPartRemoveCustomPartsPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part-remove-custom-parts-payload.md) object

Represents the payload returned after removing custom parts.

```graphql
desPartRemoveCustomParts(
  input: DesPartRemoveCustomPartsInput!
): DesPartRemoveCustomPartsPayload!
```

### Arguments

#### `input` · [`DesPartRemoveCustomPartsInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-remove-custom-parts-input.md) non-null input

The custom parts to remove.
