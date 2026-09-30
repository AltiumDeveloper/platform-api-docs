---
title: "rsaMotorStudioTuningRevisionsByTuningId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-tuning-revisions-by-tuning-id"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: true
deprecated: false
---

# rsaMotorStudioTuningRevisionsByTuningId

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

List tuning revisions for a tuning.

```graphql
rsaMotorStudioTuningRevisionsByTuningId(
  tuningId: ID!
): [RsaMotorStudioTuningRevision!]!
```

### Arguments

#### `rsaMotorStudioTuningRevisionsByTuningId.tuningId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

### Type

#### [`RsaMotorStudioTuningRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning-revision.md) object renesas-preview **EXPERIMENTAL**
