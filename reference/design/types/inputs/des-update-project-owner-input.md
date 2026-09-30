---
title: "DesUpdateProjectOwnerInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-update-project-owner-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateProjectOwnerInput

Input for updating project owner.

### Member Of

[`desUpdateProjectOwner`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/des-update-project-owner.md) mutation

```graphql
input DesUpdateProjectOwnerInput {
  projectId: ID!
  userId: String!
}
```

### Fields

#### `DesUpdateProjectOwnerInput.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Project identifier.

#### `DesUpdateProjectOwnerInput.userId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Workspace user identifier of the new project owner.
