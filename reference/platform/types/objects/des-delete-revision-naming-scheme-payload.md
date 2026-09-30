---
title: "DesDeleteRevisionNamingSchemePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-delete-revision-naming-scheme-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesDeleteRevisionNamingSchemePayload

Payload associated with deleting a revision naming scheme.

### Returned By

[`desDeleteRevisionNamingScheme`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-delete-revision-naming-scheme.md) mutation

```graphql
type DesDeleteRevisionNamingSchemePayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesDeleteRevisionNamingSchemePayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
