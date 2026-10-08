---
title: "DesTrackFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-track-filter-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesTrackFilterInput

PCB design track information.

### Member Of

[`DesTrackFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-track-filter-input.md) input

```graphql
input DesTrackFilterInput {
  and: [DesTrackFilterInput!]
  layer: DesLayerFilterInput
  or: [DesTrackFilterInput!]
}
```

### Fields

#### `and` · [`[DesTrackFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-track-filter-input.md) list input

#### `layer` · [`DesLayerFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-layer-filter-input.md) input

Layer associated with the track.

#### `or` · [`[DesTrackFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-track-filter-input.md) list input
