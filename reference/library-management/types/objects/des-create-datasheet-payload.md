---
title: "DesCreateDatasheetPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-create-datasheet-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesCreateDatasheetPayload

Payload associated with creating datasheet.

### Returned By

[`desCreateDatasheet`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-create-datasheet.md) mutation

```graphql
type DesCreateDatasheetPayload {
  datasheetId: ID
  errors: [DesPayloadError!]!
}
```

### Fields

#### `datasheetId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar

The created datasheet identifier.

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.
