---
title: "DesAddFootprintToComponentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-add-footprint-to-component-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesAddFootprintToComponentPayload

Payload associated with adding a footprint to a component.

### Returned By

[`desAddFootprintToComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-add-footprint-to-component.md) mutation

```graphql
type DesAddFootprintToComponentPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.
