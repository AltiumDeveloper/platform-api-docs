---
title: "DesignDataSchematicDocument_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-schematic-document-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataSchematicDocument\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents a schematic document in the design.

### Member Of

[`DesignData_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-preview.md) object

```graphql
type DesignDataSchematicDocument_Preview {
  documentId: String
  fileName: String
  parentDocumentIds: [String!]!
}
```

### Fields

#### `DesignDataSchematicDocument_Preview.documentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The identifier of the schematic document.

#### `DesignDataSchematicDocument_Preview.fileName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The file name of the schematic document.

#### `DesignDataSchematicDocument_Preview.parentDocumentIds` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifiers of the logical parent documents, or an empty collection for a root document.
