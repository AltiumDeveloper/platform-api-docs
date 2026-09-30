---
title: "SftSimSimulationCreatePropertiesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/sft-sim-simulation-create-properties-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: false
deprecated: false
---

# SftSimSimulationCreatePropertiesInput

### Member Of

[`sftSimSimulationCreateCustomProperties`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/sft-sim-simulation-create-custom-properties.md) mutation

```graphql
input SftSimSimulationCreatePropertiesInput {
  customProperties: [SftSimSimulationCustomPropertyInput!]!
  id: ID!
}
```

### Fields

#### `SftSimSimulationCreatePropertiesInput.customProperties` · [`[SftSimSimulationCustomPropertyInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/sft-sim-simulation-custom-property-input.md) non-null input renesas-preview

#### `SftSimSimulationCreatePropertiesInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common
