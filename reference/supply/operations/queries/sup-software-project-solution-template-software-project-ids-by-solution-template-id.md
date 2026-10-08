---
title: "supSoftwareProjectSolutionTemplateSoftwareProjectIdsBySolutionTemplateId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-project-solution-template-software-project-ids-by-solution-template-id"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSoftwareProjectSolutionTemplateSoftwareProjectIdsBySolutionTemplateId

Get software project identifiers associated with a solution template.

### Type

#### [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

```graphql
supSoftwareProjectSolutionTemplateSoftwareProjectIdsBySolutionTemplateId(
  solutionTemplateId: ID!
): [ID!]!
```

### Arguments

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
