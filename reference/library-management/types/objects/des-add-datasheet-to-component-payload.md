---
title: "DesAddDatasheetToComponentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-add-datasheet-to-component-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesAddDatasheetToComponentPayload

Payload associated with adding a datasheet to a component.

### Returned By

[`desAddDatasheetToComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-add-datasheet-to-component.md) mutation

```graphql
type DesAddDatasheetToComponentPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesAddDatasheetToComponentPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
