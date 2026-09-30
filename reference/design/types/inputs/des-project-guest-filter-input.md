---
title: "DesProjectGuestFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-project-guest-filter-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesProjectGuestFilterInput

Specifies the filtering criteria for the project guest list.

```graphql
input DesProjectGuestFilterInput {
  globalUserIds: [String!]
  text: String
}
```

### Fields

#### `DesProjectGuestFilterInput.globalUserIds` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

Global identifiers of the users.

#### `DesProjectGuestFilterInput.text` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The text that either the guest first or last names or emails must contain. Case-insensitive.
