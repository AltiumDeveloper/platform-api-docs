---
title: "DesRemoveComponentPartChoicesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-remove-component-part-choices-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesRemoveComponentPartChoicesInput

Input to remove component part choices.

### Member Of

[`desRemoveComponentPartChoices`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-remove-component-part-choices.md) mutation

```graphql
input DesRemoveComponentPartChoicesInput {
  componentId: ID!
  manufacturerParts: [DesPartChoiceInput!]
}
```

### Fields

#### `DesRemoveComponentPartChoicesInput.componentId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Component identifier.

#### `DesRemoveComponentPartChoicesInput.manufacturerParts` · [`[DesPartChoiceInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-choice-input.md) list input library-management

Manufacturer part choices to remove. Use null to remove all choices.
