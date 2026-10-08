---
title: "KgNodeParameterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/kg-node-parameter-input"
bounded_context: "Platform"
kind: "inputs"
experimental: true
deprecated: false
---

# KgNodeParameterInput

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`KgAddNodeInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/kg-add-node-input.md) input

```graphql
input KgNodeParameterInput {
  name: String!
  value: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The parameter name.

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The parameter value.
