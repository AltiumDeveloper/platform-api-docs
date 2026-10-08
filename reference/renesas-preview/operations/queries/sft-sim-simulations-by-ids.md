---
title: "sftSimSimulationsByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-sim-simulations-by-ids"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: false
deprecated: false
---

# sftSimSimulationsByIds

Gets simulations by identifiers.

### Type

#### [`SftSimSimulation`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-sim-simulation.md) object

```graphql
sftSimSimulationsByIds(
  ids: [ID!]!
): [SftSimSimulation!]!
```

### Arguments

#### `ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
