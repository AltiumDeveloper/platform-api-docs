---
title: "SupEvalKitParameterInfo"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-parameter-info"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitParameterInfo

Represents the information of a parameter in the evaluation kit.

### Returned By

[`supEvalKitParameterInfos`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kit-parameter-infos.md) query

### Member Of

[`SupEvalKitParameter`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-parameter.md) object

```graphql
type SupEvalKitParameterInfo {
  title: String!
}
```

### Fields

#### `title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The parameter title.
