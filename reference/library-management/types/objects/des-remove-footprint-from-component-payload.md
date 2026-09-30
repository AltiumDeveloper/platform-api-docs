---
title: "DesRemoveFootprintFromComponentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-remove-footprint-from-component-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesRemoveFootprintFromComponentPayload

Payload associated with removing a footprint from a component.

### Returned By

[`desRemoveFootprintFromComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-remove-footprint-from-component.md) mutation

```graphql
type DesRemoveFootprintFromComponentPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesRemoveFootprintFromComponentPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
