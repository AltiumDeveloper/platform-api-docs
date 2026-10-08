---
title: "DesWorkflowFilterByVariableInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/inputs/des-workflow-filter-by-variable-input"
bounded_context: "Customization"
kind: "inputs"
experimental: false
deprecated: false
---

# DesWorkflowFilterByVariableInput

Filter workflows by a variable.

```graphql
input DesWorkflowFilterByVariableInput {
  name: String
  valueMatchesOneOf: [String!]!
}
```

### Fields

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Name of the variable.

#### `valueMatchesOneOf` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

List of value prefixes.
