---
title: "SftSimSimulationCreatePropertiesPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-sim-simulation-create-properties-payload"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: false
deprecated: false
---

# SftSimSimulationCreatePropertiesPayload

### Returned By

[`sftSimSimulationCreateCustomProperties`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/sft-sim-simulation-create-custom-properties.md) mutation

```graphql
type SftSimSimulationCreatePropertiesPayload {
  customProperties: [SftSimSimulationCustomProperty!]!
  id: ID!
}
```

### Fields

#### `SftSimSimulationCreatePropertiesPayload.customProperties` · [`[SftSimSimulationCustomProperty!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-sim-simulation-custom-property.md) non-null object renesas-preview

#### `SftSimSimulationCreatePropertiesPayload.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common
