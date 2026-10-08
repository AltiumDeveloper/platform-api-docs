---
title: "rsaMotorStudioScopeConfigs"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-scope-configs"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: true
deprecated: false
---

# rsaMotorStudioScopeConfigs

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

List scope configurations for a project.

### Type

#### [`RsaMotorStudioScopeConfig`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-scope-config.md) object **EXPERIMENTAL**

```graphql
rsaMotorStudioScopeConfigs(
  projectId: ID!
): [RsaMotorStudioScopeConfig!]!
```

### Arguments

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
