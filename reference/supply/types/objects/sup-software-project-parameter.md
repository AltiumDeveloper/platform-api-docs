---
title: "SupSoftwareProjectParameter"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-parameter"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectParameter

Represents a parameter in the software project.

### Member Of

[`SupSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) object

```graphql
type SupSoftwareProjectParameter {
  parameter: SupSoftwareProjectParameterInfo!
  values: [String!]
}
```

### Fields

#### `SupSoftwareProjectParameter.parameter` · [`SupSoftwareProjectParameterInfo!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-parameter-info.md) non-null object supply

The parameter definition.

#### `SupSoftwareProjectParameter.values` · [`[String!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) list scalar common

The parameter values.
