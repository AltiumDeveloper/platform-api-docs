---
title: "SupRefDesignType"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-ref-design-type"
bounded_context: "Supply"
kind: "enums"
experimental: false
deprecated: false
---

# SupRefDesignType

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) object · [`SupRefDesignFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-ref-design-filter-input.md) input · [`SupRefDesignTypeBucket`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design-type-bucket.md) object

```graphql
enum SupRefDesignType {
  DEMONSTRATION
  DEVELOPMENT
  EVALUATION
  EXAMPLE
  EXPANSION
  REFERENCE_DESIGN
  STARTER
  SYSTEM
}
```

### Values

#### `DEMONSTRATION`

Highlights a component feature, often for marketing or sales purposes.

#### `DEVELOPMENT`

Enables code/hardware development and prototyping.

#### `EVALUATION`

Intended to test specific electrical/mechanical characteristics.

#### `EXAMPLE`

Example project demonstrating specific use cases or implementations.

#### `EXPANSION`

Extends capabilities of a dev board. Often optional.

#### `REFERENCE_DESIGN`

Complete application or subsystem design with documentation.

#### `STARTER`

Bundled offering to help users ramp up quickly.

#### `SYSTEM`

Combines multiple board types, sensors, or modules into a full system.
