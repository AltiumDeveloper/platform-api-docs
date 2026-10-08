---
title: "supSoftwareProjectSolutionTemplateSoftwareProjectsBySolutionTemplateId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-project-solution-template-software-projects-by-solution-template-id"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSoftwareProjectSolutionTemplateSoftwareProjectsBySolutionTemplateId

Get software projects associated with a solution template.

### Type

#### [`SupSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) object

```graphql
supSoftwareProjectSolutionTemplateSoftwareProjectsBySolutionTemplateId(
  solutionTemplateId: ID!
): [SupSoftwareProject!]!
```

### Arguments

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
