---
title: "DesignDataConfiguration_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-configuration-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataConfiguration\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents the configuration settings for a design.

### Member Of

[`DesignData_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-preview.md) object

```graphql
type DesignDataConfiguration_Preview {
  customChecks: [DesignDataCustomCheckConfigurationItem_Preview!]!
}
```

### Fields

#### `DesignDataConfiguration_Preview.customChecks` · [`[DesignDataCustomCheckConfigurationItem_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-custom-check-configuration-item-preview.md) non-null object design

The custom check configurations defined for the design.
