---
title: "DesAddComponentPartChoicesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-add-component-part-choices-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesAddComponentPartChoicesInput

Input to add component part choices.

### Member Of

[`desAddComponentPartChoices`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-add-component-part-choices.md) mutation

```graphql
input DesAddComponentPartChoicesInput {
  componentId: ID!
  manufacturerParts: [DesPartChoiceInput!]!
}
```

### Fields

#### `componentId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Component identifier.

#### `manufacturerParts` · [`[DesPartChoiceInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-choice-input.md) non-null input

Manufacturer part choices to add.
