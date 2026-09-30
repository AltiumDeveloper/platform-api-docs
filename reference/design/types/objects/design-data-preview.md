---
title: "DesignData_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignData\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents the design data extracted from a design project.

### Member Of

[`DesignDataGeneration_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-generation-preview.md) object · [`DesignDataGeneration`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-generation.md) object

```graphql
type DesignData_Preview {
  components: [DesignDataComponent_Preview!]!
  configuration: DesignDataConfiguration_Preview!
  nets: [DesignDataNet_Preview!]!
  projectGuid: String
  schematics: [DesignDataSchematicDocument_Preview!]!
  variants: [DesignDataVariant_Preview!]!
  version: String
}
```

### Fields

#### `DesignData_Preview.components` · [`[DesignDataComponent_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-component-preview.md) non-null object design

The components contained in the design.

#### `DesignData_Preview.configuration` · [`DesignDataConfiguration_Preview!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-configuration-preview.md) non-null object design

The configuration settings for the design.

#### `DesignData_Preview.nets` · [`[DesignDataNet_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-net-preview.md) non-null object design

The nets defined in the design.

#### `DesignData_Preview.projectGuid` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The identifier of the source project.

#### `DesignData_Preview.schematics` · [`[DesignDataSchematicDocument_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-schematic-document-preview.md) non-null object design

The schematic documents contained in the design.

#### `DesignData_Preview.variants` · [`[DesignDataVariant_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-variant-preview.md) non-null object design

The project variants defined in the design.

#### `DesignData_Preview.version` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The version of the design data.
