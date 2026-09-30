---
title: "DesDeleteRevisionNamingSchemeInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-delete-revision-naming-scheme-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesDeleteRevisionNamingSchemeInput

Input for deleting a revision naming scheme.

### Member Of

[`desDeleteRevisionNamingScheme`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-delete-revision-naming-scheme.md) mutation

```graphql
input DesDeleteRevisionNamingSchemeInput {
  id: ID!
}
```

### Fields

#### `DesDeleteRevisionNamingSchemeInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The revision naming scheme to be deleted.
