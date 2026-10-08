---
title: "RsaMotorStudioTuningParameterEvidence"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning-parameter-evidence"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# RsaMotorStudioTuningParameterEvidence

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`RsaMotorStudioTuningParameter`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-tuning-parameter.md) object

```graphql
type RsaMotorStudioTuningParameterEvidence {
  note: String
  scopeCapture: RsaMotorStudioScopeCapture
  scopeCaptureId: String
  scopeProjectId: ID
}
```

### Fields

#### `note` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `scopeCapture` · [`RsaMotorStudioScopeCapture`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-scope-capture.md) object

Resolves the scope capture referenced by this evidence.

#### `scopeCaptureId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `scopeProjectId` · [`ID`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) scalar
