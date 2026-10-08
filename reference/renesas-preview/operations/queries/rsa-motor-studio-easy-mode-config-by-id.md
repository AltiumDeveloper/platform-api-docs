---
title: "rsaMotorStudioEasyModeConfigById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-easy-mode-config-by-id"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: true
deprecated: false
---

# rsaMotorStudioEasyModeConfigById

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Get an easymode config by id.

### Type

#### [`RsaMotorStudioEasyModeConfig`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-easy-mode-config.md) object **EXPERIMENTAL**

```graphql
rsaMotorStudioEasyModeConfigById(
  configId: String!
  projectId: ID!
): RsaMotorStudioEasyModeConfig
```

### Arguments

#### `configId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
