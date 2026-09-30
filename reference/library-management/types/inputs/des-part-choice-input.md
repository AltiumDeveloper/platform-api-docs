---
title: "DesPartChoiceInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-part-choice-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesPartChoiceInput

Input for part choice.

### Member Of

[`DesAddComponentPartChoicesInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-add-component-part-choices-input.md) input · [`DesRemoveComponentPartChoicesInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-remove-component-part-choices-input.md) input

```graphql
input DesPartChoiceInput {
  companyName: String!
  partNumber: String!
  partSourceId: String
}
```

### Fields

#### `DesPartChoiceInput.companyName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Name of company for part choice.

#### `DesPartChoiceInput.partNumber` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Part number for part choice.

#### `DesPartChoiceInput.partSourceId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The identifier of the part source that provides this part choice. If omitted or set to `null`, the default Altium Parts Provider will be used.
