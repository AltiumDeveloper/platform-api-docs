---
title: "DesUpdateRevisionNamingSchemePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-update-revision-naming-scheme-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateRevisionNamingSchemePayload

Payload associated with updating revision naming scheme.

### Returned By

[`desUpdateRevisionNamingScheme`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-update-revision-naming-scheme.md) mutation

```graphql
type DesUpdateRevisionNamingSchemePayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesUpdateRevisionNamingSchemePayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
