---
title: "DesCreateRevisionNamingSchemePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-create-revision-naming-scheme-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesCreateRevisionNamingSchemePayload

Payload associated with creating a revision naming scheme.

### Returned By

[`desCreateRevisionNamingScheme`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-create-revision-naming-scheme.md) mutation

```graphql
type DesCreateRevisionNamingSchemePayload {
  errors: [DesPayloadError!]!
  id: ID!
}
```

### Fields

#### `errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object

Payload errors.

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Identifier of the created revision naming scheme.
