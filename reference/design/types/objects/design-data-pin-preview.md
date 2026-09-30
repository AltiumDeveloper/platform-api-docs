---
title: "DesignDataPin_Preview"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-pin-preview"
bounded_context: "Design"
kind: "objects"
experimental: true
deprecated: false
---

# DesignDataPin\_Preview

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Represents a pin on a component or part.

### Member Of

[`DesignDataNet_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-net-preview.md) object · [`DesignDataPart_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-part-preview.md) object

```graphql
type DesignDataPin_Preview {
  boundingRectangle: DesignDataRectangle_Preview
  description: String
  documentId: String
  electricalType: String
  fullName: String
  functions: [String!]!
  location: DesignDataLocation_Preview
  name: String
  number: String
  parameters: [DesignDataPinParameter_Preview!]!
  propagationDelay: Float
  uniqueId: String
  variantId: String
  variantName: String
}
```

### Fields

#### `DesignDataPin_Preview.boundingRectangle` · [`DesignDataRectangle_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-rectangle-preview.md) object design

The bounding rectangle of the pin.

#### `DesignDataPin_Preview.description` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The description of the pin.

#### `DesignDataPin_Preview.documentId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The identifier of the document containing the pin.

#### `DesignDataPin_Preview.electricalType` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The electrical type of the pin.

#### `DesignDataPin_Preview.fullName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The full name of the pin.

#### `DesignDataPin_Preview.functions` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The electrical type of the pin.

#### `DesignDataPin_Preview.location` · [`DesignDataLocation_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-location-preview.md) object design

The location of the pin.

#### `DesignDataPin_Preview.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The name of the pin.

#### `DesignDataPin_Preview.number` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The number of the pin.

#### `DesignDataPin_Preview.parameters` · [`[DesignDataPinParameter_Preview!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/design-data-pin-parameter-preview.md) non-null object design

The parameters associated with this pin.

#### `DesignDataPin_Preview.propagationDelay` · [`Float`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/float.md) scalar common

The propagation delay of the pin.

#### `DesignDataPin_Preview.uniqueId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The unique identifier of the pin.

#### `DesignDataPin_Preview.variantId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The variant identifier of the pin.

#### `DesignDataPin_Preview.variantName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The variant name of the pin.
