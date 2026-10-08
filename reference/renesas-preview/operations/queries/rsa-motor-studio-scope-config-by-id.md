---
title: "rsaMotorStudioScopeConfigById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-scope-config-by-id"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: true
deprecated: false
---

# rsaMotorStudioScopeConfigById

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Get a scope configuration by id.

### Type

#### [`RsaMotorStudioScopeConfig`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-scope-config.md) object **EXPERIMENTAL**

```graphql
rsaMotorStudioScopeConfigById(
  configId: String!
  projectId: ID!
): RsaMotorStudioScopeConfig
```

### Arguments

#### `configId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
