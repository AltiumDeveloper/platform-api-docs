---
title: "DesSetProjectRequirementsBlockPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-set-project-requirements-block-payload"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesSetProjectRequirementsBlockPayload

Payload for setting the requirements block of a project.

### Returned By

[`desSetProjectRequirementsBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/des-set-project-requirements-block.md) mutation

```graphql
type DesSetProjectRequirementsBlockPayload {
  errors: [DesPayloadError!]!
}
```

### Fields

#### `DesSetProjectRequirementsBlockPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.
