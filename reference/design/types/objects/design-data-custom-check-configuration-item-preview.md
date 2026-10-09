---
title: "DesignDataCustomCheckConfigurationItem_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-custom-check-configuration-item-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataCustomCheckConfigurationItem\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents a custom check configuration item in the design.

### Member Of

[`DesignDataConfiguration_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-configuration-preview.md) object

```graphql
type DesignDataCustomCheckConfigurationItem_Preview {
  customCheckId: String!
  errorReportLevel: String!
  name: String!
}
```

### Fields

#### `customCheckId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the custom check.

#### `errorReportLevel` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The error level at which violations of this check are reported. Known values: NO\_REPORT, WARNING, ERROR, FATAL. New values may be added; clients must tolerate unknown values.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the custom check.
