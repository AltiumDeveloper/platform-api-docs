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

#### `DesWorkflowFilterByVariableInput.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Name of the variable.

#### `DesWorkflowFilterByVariableInput.valueMatchesOneOf` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

List of value prefixes.
