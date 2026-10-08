---
title: "rsaMotorStudioScopeCaptures"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-scope-captures"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: true
deprecated: false
---

# rsaMotorStudioScopeCaptures

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

List scope captures for a project.

### Type

#### [`RsaMotorStudioScopeCapture`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-scope-capture.md) object **EXPERIMENTAL**

```graphql
rsaMotorStudioScopeCaptures(
  projectId: ID!
): [RsaMotorStudioScopeCapture!]!
```

### Arguments

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
