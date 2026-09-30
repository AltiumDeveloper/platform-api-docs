---
title: "SupSolutionTemplateApplication"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateApplication

### Returned By

[`supSolutionTemplateApplicationByApplicationId`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-application-by-application-id.md) query · [`supSolutionTemplateApplicationById`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-application-by-id.md) query · [`supSolutionTemplateApplications`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-applications.md) query

### Member Of

[`SupSolutionTemplateApplicationConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application-connection.md) object · [`SupSolutionTemplateApplicationEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application-edge.md) object

```graphql
type SupSolutionTemplateApplication {
  applicationId: String!
  createdAt: DateTime!
  description: String
  id: ID!
  parameters: [SupSolutionTemplateApplicationParameterBundle!]!
  updatedAt: DateTime!
}
```

### Fields

#### `SupSolutionTemplateApplication.applicationId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The solution template application identifier.

#### `SupSolutionTemplateApplication.createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The date and time when the solution template application was created.

#### `SupSolutionTemplateApplication.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The solution template application description.

#### `SupSolutionTemplateApplication.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The solution template application identifier.

#### `SupSolutionTemplateApplication.parameters` · [`[SupSolutionTemplateApplicationParameterBundle!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-application-parameter-bundle.md) non-null object supply

The list of parameter bundles associated with the solution template.

#### `SupSolutionTemplateApplication.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The date and time when the solution template application was updated.
