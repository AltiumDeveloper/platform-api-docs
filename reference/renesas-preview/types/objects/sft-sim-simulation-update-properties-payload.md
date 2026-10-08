---
title: "SftSimSimulationUpdatePropertiesPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-sim-simulation-update-properties-payload"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: false
deprecated: false
---

# SftSimSimulationUpdatePropertiesPayload

### Returned By

[`sftSimSimulationUpdateCustomProperties`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/sft-sim-simulation-update-custom-properties.md) mutation

```graphql
type SftSimSimulationUpdatePropertiesPayload {
  customProperties: [SftSimSimulationCustomProperty!]!
  id: ID!
}
```

### Fields

#### `customProperties` · [`[SftSimSimulationCustomProperty!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-sim-simulation-custom-property.md) non-null object

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
