---
title: "DesSetProjectRequirementsBlockInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-set-project-requirements-block-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesSetProjectRequirementsBlockInput

Sets the requirements block for a project.

### Member Of

[`desSetProjectRequirementsBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/des-set-project-requirements-block.md) mutation

```graphql
input DesSetProjectRequirementsBlockInput {
  projectId: ID!
  requirementsBlockId: String
}
```

### Fields

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Project identifier.

#### `requirementsBlockId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Requirements block identifier.
