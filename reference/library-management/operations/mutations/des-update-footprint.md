---
title: "desUpdateFootprint"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-footprint"
bounded_context: "Library Management"
kind: "mutations"
experimental: false
deprecated: false
---

# desUpdateFootprint

Updates the specified footprint. This will create a new revision of the footprint, and reset the lifecycle state.

### Type

#### [`DesUpdateFootprintPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-update-footprint-payload.md) object

Payload of updating a footprint.

```graphql
desUpdateFootprint(
  input: DesUpdateFootprintInput!
): DesUpdateFootprintPayload!
```

### Arguments

#### `input` · [`DesUpdateFootprintInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-update-footprint-input.md) non-null input
