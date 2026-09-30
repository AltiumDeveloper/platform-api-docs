---
title: "DesUpdateComponentTemplatePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-update-component-template-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateComponentTemplatePayload

Payload associated with updating a component template.

### Returned By

[`desUpdateComponentTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-update-component-template.md) mutation

```graphql
type DesUpdateComponentTemplatePayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesUpdateComponentTemplatePayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
