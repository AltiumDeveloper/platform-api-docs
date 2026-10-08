---
title: "DesSharedWithMeProjectInfoFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-shared-with-me-project-info-filter-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesSharedWithMeProjectInfoFilterInput

Information about a project that is shared with the user.

### Member Of

[`DesSharedWithMeProjectInfoFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-shared-with-me-project-info-filter-input.md) input

```graphql
input DesSharedWithMeProjectInfoFilterInput {
  and: [DesSharedWithMeProjectInfoFilterInput!]
  description: StringOperationFilterInput
  name: StringOperationFilterInput
  or: [DesSharedWithMeProjectInfoFilterInput!]
}
```

### Fields

#### `and` · [`[DesSharedWithMeProjectInfoFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-shared-with-me-project-info-filter-input.md) list input

#### `description` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The project description.

#### `name` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The project name.

#### `or` · [`[DesSharedWithMeProjectInfoFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-shared-with-me-project-info-filter-input.md) list input
