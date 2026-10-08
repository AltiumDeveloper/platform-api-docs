---
title: "DesRemoveDatasheetFromComponentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-remove-datasheet-from-component-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesRemoveDatasheetFromComponentPayload

Payload associated with removing a datasheet from a component.

### Returned By

[`desRemoveDatasheetFromComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-remove-datasheet-from-component.md) mutation

```graphql
type DesRemoveDatasheetFromComponentPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.
