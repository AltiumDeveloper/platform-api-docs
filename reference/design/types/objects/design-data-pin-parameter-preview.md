---
title: "DesignDataPinParameter_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-pin-parameter-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataPinParameter\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents a parameter associated with a pin.

### Member Of

[`DesignDataPin_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-pin-preview.md) object

```graphql
type DesignDataPinParameter_Preview {
  name: String
  value: String
}
```

### Fields

#### `DesignDataPinParameter_Preview.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The name of the parameter.

#### `DesignDataPinParameter_Preview.value` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The value of the parameter.
