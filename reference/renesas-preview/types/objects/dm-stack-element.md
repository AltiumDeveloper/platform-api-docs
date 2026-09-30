---
title: "DmStackElement"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-stack-element"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmStackElement

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

A single FSP stack element including its module and dependency relationships.

### Member Of

[`DmStackContext`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-stack-context.md) object · [`DmStackElement`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-stack-element.md) object

```graphql
type DmStackElement {
  dependencies: [DmStackElement!]!
  module: DmFspModule
  moduleId: String!
  requires: String!
}
```

### Fields

#### `DmStackElement.dependencies` · [`[DmStackElement!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-stack-element.md) non-null object renesas-preview

Dependent stack elements required by this element.

#### `DmStackElement.module` · [`DmFspModule`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-fsp-module.md) object renesas-preview

Concrete module metadata for this stack element.

#### `DmStackElement.moduleId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Unique module identifier.

#### `DmStackElement.requires` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Requirement string for dependency resolution.
