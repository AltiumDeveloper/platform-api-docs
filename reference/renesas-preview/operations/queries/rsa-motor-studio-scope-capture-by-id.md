---
title: "rsaMotorStudioScopeCaptureById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-scope-capture-by-id"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: true
deprecated: false
---

# rsaMotorStudioScopeCaptureById

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Get a scope capture by id.

### Type

#### [`RsaMotorStudioScopeCapture`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-scope-capture.md) object **EXPERIMENTAL**

```graphql
rsaMotorStudioScopeCaptureById(
  captureId: String!
  projectId: ID!
): RsaMotorStudioScopeCapture
```

### Arguments

#### `captureId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
