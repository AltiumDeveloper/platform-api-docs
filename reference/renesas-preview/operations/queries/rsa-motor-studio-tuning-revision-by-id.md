---
title: "rsaMotorStudioTuningRevisionById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-tuning-revision-by-id"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: true
deprecated: false
---

# rsaMotorStudioTuningRevisionById

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Get a tuning revision by id.

```graphql
rsaMotorStudioTuningRevisionById(
  revisionId: ID!
): RsaMotorStudioTuningRevision!
```

### Arguments

#### `rsaMotorStudioTuningRevisionById.revisionId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

### Type

#### [`RsaMotorStudioTuningRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning-revision.md) object renesas-preview **EXPERIMENTAL**
