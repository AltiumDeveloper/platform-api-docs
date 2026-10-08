---
title: "DesUpdateComponentTemplateInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-component-template-input"
bounded_context: "Library Management"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateComponentTemplateInput

Input for updating component template.

### Member Of

[`desUpdateComponentTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-component-template.md) mutation

```graphql
input DesUpdateComponentTemplateInput {
  comment: String
  componentTemplateId: ID!
  contentAsText: String!
  description: String
}
```

### Fields

#### `comment` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Optional comment.

#### `componentTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The node identifier.

#### `contentAsText` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The component template content (CMPT format JSON string).

#### `description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Optional description.
