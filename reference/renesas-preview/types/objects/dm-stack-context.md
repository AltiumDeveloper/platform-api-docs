---
title: "DmStackContext"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-stack-context"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmStackContext

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

An FSP configuration context grouping stack elements for a context ID.

### Member Of

[`DmStackModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-stack-model.md) object

```graphql
type DmStackContext {
  contextId: String!
  stackElements: [DmStackElement!]!
}
```

### Fields

#### `DmStackContext.contextId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Identifier of the context.

#### `DmStackContext.stackElements` · [`[DmStackElement!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-stack-element.md) non-null object renesas-preview

Stack elements within this context.
