---
title: "SupSolutionTemplateCompatibleEvalKit"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-compatible-eval-kit"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateCompatibleEvalKit

### Member Of

[`SupSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template.md) object

```graphql
type SupSolutionTemplateCompatibleEvalKit {
  compatibleEvalKitId: String! @deprecated
  evalKit: SupEvalKit!
  evalKitId: ID!
  parameters: [SupSolutionTemplateParameterBundle!]!
}
```

### Fields

#### `evalKit` · [`SupEvalKit!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit.md) non-null object

The evaluation kit associated with the solution template.

#### `evalKitId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The evaluation kit identifier associated with the solution template.

#### `parameters` · [`[SupSolutionTemplateParameterBundle!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template-parameter-bundle.md) non-null object

The list of parameters.

#### Deprecated

#### `compatibleEvalKitId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Fields play a technical role for internal uses.

The compatible evaluation kit identifier.
