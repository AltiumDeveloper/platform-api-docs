---
title: "DesReleaseComponentPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-release-component-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesReleaseComponentPayload

Payload associated with releasing component file.

### Returned By

[`desReleaseComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-release-component.md) mutation

```graphql
type DesReleaseComponentPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.
