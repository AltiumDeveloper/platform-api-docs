---
title: "DesReleaseComponentTemplatePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-release-component-template-payload"
bounded_context: "Library Management"
kind: "objects"
experimental: false
deprecated: false
---

# DesReleaseComponentTemplatePayload

Payload associated with releasing a component template.

### Returned By

[`desReleaseComponentTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/mutations/des-release-component-template.md) mutation

```graphql
type DesReleaseComponentTemplatePayload {
  componentTemplateId: ID!
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesReleaseComponentTemplatePayload.componentTemplateId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

Component template identifier.

#### `DesReleaseComponentTemplatePayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
