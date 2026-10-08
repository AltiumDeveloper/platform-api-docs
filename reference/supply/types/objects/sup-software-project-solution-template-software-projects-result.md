---
title: "SupSoftwareProjectSolutionTemplateSoftwareProjectsResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-solution-template-software-projects-result"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectSolutionTemplateSoftwareProjectsResult

### Returned By

[`supSoftwareProjectSolutionTemplateSoftwareProjectsBySolutionTemplateIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-project-solution-template-software-projects-by-solution-template-ids.md) query

```graphql
type SupSoftwareProjectSolutionTemplateSoftwareProjectsResult {
  softwareProjects: [SupSoftwareProject!]!
  solutionTemplateId: ID!
}
```

### Fields

#### `softwareProjects` · [`[SupSoftwareProject!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) non-null object

The software projects associated with the solution template.

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The solution template identifier.
