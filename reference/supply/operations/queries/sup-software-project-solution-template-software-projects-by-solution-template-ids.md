---
title: "supSoftwareProjectSolutionTemplateSoftwareProjectsBySolutionTemplateIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-project-solution-template-software-projects-by-solution-template-ids"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSoftwareProjectSolutionTemplateSoftwareProjectsBySolutionTemplateIds

Get software projects associated with multiple solution templates, grouped by solution template identifier.

```graphql
supSoftwareProjectSolutionTemplateSoftwareProjectsBySolutionTemplateIds(
  solutionTemplateIds: [ID!]!
): [SupSoftwareProjectSolutionTemplateSoftwareProjectsResult!]!
```

### Arguments

#### `supSoftwareProjectSolutionTemplateSoftwareProjectsBySolutionTemplateIds.solutionTemplateIds` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

### Type

#### [`SupSoftwareProjectSolutionTemplateSoftwareProjectsResult`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-solution-template-software-projects-result.md) object supply
