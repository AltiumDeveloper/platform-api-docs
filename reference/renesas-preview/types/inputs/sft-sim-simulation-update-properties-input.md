---
title: "SftSimSimulationUpdatePropertiesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/sft-sim-simulation-update-properties-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: false
deprecated: false
---

# SftSimSimulationUpdatePropertiesInput

### Member Of

[`sftSimSimulationUpdateCustomProperties`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/sft-sim-simulation-update-custom-properties.md) mutation

```graphql
input SftSimSimulationUpdatePropertiesInput {
  customProperties: [SftSimSimulationCustomPropertyInput!]!
  id: ID!
}
```

### Fields

#### `SftSimSimulationUpdatePropertiesInput.customProperties` · [`[SftSimSimulationCustomPropertyInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/sft-sim-simulation-custom-property-input.md) non-null input renesas-preview

#### `SftSimSimulationUpdatePropertiesInput.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common
