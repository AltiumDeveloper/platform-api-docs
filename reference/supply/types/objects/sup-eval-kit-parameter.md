---
title: "SupEvalKitParameter"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-parameter"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitParameter

Represents a parameter in the evaluation kit.

### Member Of

[`SupEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit.md) object

```graphql
type SupEvalKitParameter {
  parameter: SupEvalKitParameterInfo!
  values: [String!]
}
```

### Fields

#### `SupEvalKitParameter.parameter` · [`SupEvalKitParameterInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-parameter-info.md) non-null object supply

The parameter definition.

#### `SupEvalKitParameter.values` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

The parameter values.
