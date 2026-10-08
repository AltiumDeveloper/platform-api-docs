---
title: "DesignDataPartParameter_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-part-parameter-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataPartParameter\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents a parameter associated with a part.

### Member Of

[`DesignDataPart_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-part-preview.md) object

```graphql
type DesignDataPartParameter_Preview {
  name: String
  value: String
}
```

### Fields

#### `DesignDataPartParameter_Preview.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The name of the parameter.

#### `DesignDataPartParameter_Preview.value` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The value of the parameter.
