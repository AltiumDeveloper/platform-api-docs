---
title: "BomCreateBomPartReferenceInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-part-reference-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# BomCreateBomPartReferenceInput

Describes a part associated with an element. Only a single field must be specified.

### Member Of

[`BomCreateBomItemElementInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-create-bom-item-element-input.md) input

```graphql
input BomCreateBomPartReferenceInput {
  octopart: BomOctopartPartReferenceInput
  raw: BomRawPartReferenceInput
}
```

### Fields

#### `BomCreateBomPartReferenceInput.octopart` · [`BomOctopartPartReferenceInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-octopart-part-reference-input.md) input procurement

A reference to a part in Octopart.

#### `BomCreateBomPartReferenceInput.raw` · [`BomRawPartReferenceInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/inputs/bom-raw-part-reference-input.md) input procurement

A raw part descriptor (MPN + Manufacturer).
