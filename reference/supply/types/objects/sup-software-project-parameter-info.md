---
title: "SupSoftwareProjectParameterInfo"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-parameter-info"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectParameterInfo

Represents the information of a parameter in the software project.

### Returned By

[`supSoftwareProjectParameterInfos`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-project-parameter-infos.md) query

### Member Of

[`SupSoftwareProjectParameter`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-parameter.md) object

```graphql
type SupSoftwareProjectParameterInfo {
  title: String!
}
```

### Fields

#### `SupSoftwareProjectParameterInfo.title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The parameter title.
