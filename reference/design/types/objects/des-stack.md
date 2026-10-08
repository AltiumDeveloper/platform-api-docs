---
title: "DesStack"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-stack"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesStack

Information about layer stack.

### Member Of

[`DesStackup`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-stackup.md) object

```graphql
type DesStack {
  layers: [DesLayer!]!
  name: String!
}
```

### Fields

#### `layers` · [`[DesLayer!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-layer.md) non-null object

Layers in the stack.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the stack.
