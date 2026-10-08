---
title: "GloCusJsonArrayOfAssignmentConfigurationParameter"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-json-array-of-assignment-configuration-parameter"
bounded_context: "Customization"
kind: "objects"
experimental: false
deprecated: false
---

# GloCusJsonArrayOfAssignmentConfigurationParameter

### Member Of

[`GloCusDefaultAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-default-assignment.md) object · [`GloCusWorkflowAssignment`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-workflow-assignment.md) object

```graphql
type GloCusJsonArrayOfAssignmentConfigurationParameter {
  gloCusValue: [GloCusAssignmentConfigurationParameter!]!
  json: String!
}
```

### Fields

#### `gloCusValue` · [`[GloCusAssignmentConfigurationParameter!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-cus-assignment-configuration-parameter.md) non-null object

#### `json` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
