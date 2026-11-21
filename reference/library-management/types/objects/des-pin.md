---
title: "DesPin"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-pin"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesPin

Pin properties.

### Common Data Model

- [Pin](https://w3id.org/altium/cdm/library/Pin) — A pin definition on a schematic symbol: one electrical connection point with its designator, name and electrical type, and optionally alternate functions. Pins placed in a design take their definition from here.
  - IRI: [`https://w3id.org/altium/cdm/library/Pin`](https://w3id.org/altium/cdm/library/Pin)

### Member Of

[`DesFootprint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint.md) object · [`DesSymbol`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol.md) object

```graphql
type DesPin {
  description: String!
  designator: String!
  electricalType: DesPinElectricalType!
  isHidden: Boolean!
  name: String!
}
```

### Fields

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Description of pin.

#### `designator` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The numerical identifier of the pin.

#### `electricalType` · [`DesPinElectricalType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/enums/des-pin-electrical-type.md) non-null enum Design

Electrical type of the pin.

#### `isHidden` · [`Boolean!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Returns `true` if the pin is hidden.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Pin display name. By default, a newly placed pin will be named using the designator value.
