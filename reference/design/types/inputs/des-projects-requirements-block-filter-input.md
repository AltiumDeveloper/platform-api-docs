---
title: "DesProjectsRequirementsBlockFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-projects-requirements-block-filter-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesProjectsRequirementsBlockFilterInput

Filter for requirements blocks in projects.

### Member Of

[`desProjects`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-projects.md) query

```graphql
input DesProjectsRequirementsBlockFilterInput {
  blockIds: [String!]!
}
```

### Fields

#### `blockIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Requirements block identifiers.
