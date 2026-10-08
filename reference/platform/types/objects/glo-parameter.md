---
title: "GloParameter"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-parameter"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloParameter

### Member Of

[`GloOrganization`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-organization.md) object · [`GloUser`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-user.md) object

```graphql
type GloParameter {
  name: String
  parameterId: String
  value: String
}
```

### Fields

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Parameter name.

#### `parameterId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Parameter identifier.

#### `value` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Parameter value.
