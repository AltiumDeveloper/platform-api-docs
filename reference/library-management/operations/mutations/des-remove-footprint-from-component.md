---
title: "desRemoveFootprintFromComponent"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-remove-footprint-from-component"
bounded_context: "Library Management"
kind: "mutations"
experimental: false
deprecated: false
---

# desRemoveFootprintFromComponent

Removes the specified footprint from a component (does not affect the revision).

```graphql
desRemoveFootprintFromComponent(
  input: DesRemoveFootprintFromComponentInput!
): DesRemoveFootprintFromComponentPayload!
```

### Arguments

#### `desRemoveFootprintFromComponent.input` · [`DesRemoveFootprintFromComponentInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/inputs/des-remove-footprint-from-component-input.md) non-null input library-management

### Type

#### [`DesRemoveFootprintFromComponentPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-remove-footprint-from-component-payload.md) object library-management

Payload associated with removing a footprint from a component.
