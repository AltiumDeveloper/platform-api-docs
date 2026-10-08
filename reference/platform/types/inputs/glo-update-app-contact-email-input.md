---
title: "GloUpdateAppContactEmailInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-update-app-contact-email-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloUpdateAppContactEmailInput

### Member Of

[`gloUpdateAppContactEmail`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-update-app-contact-email.md) mutation

```graphql
input GloUpdateAppContactEmailInput {
  contactEmail: String!
  id: ID!
}
```

### Fields

#### `contactEmail` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The new contact email for the App.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The GRID identifier for the App to be updated.
