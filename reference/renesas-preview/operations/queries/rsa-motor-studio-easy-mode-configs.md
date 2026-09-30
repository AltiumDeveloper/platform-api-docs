---
title: "rsaMotorStudioEasyModeConfigs"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-easy-mode-configs"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: true
deprecated: false
---

# rsaMotorStudioEasyModeConfigs

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

List existing easymode configs for a project.

```graphql
rsaMotorStudioEasyModeConfigs(
  projectId: ID!
): [RsaMotorStudioEasyModeConfig!]!
```

### Arguments

#### `rsaMotorStudioEasyModeConfigs.projectId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

### Type

#### [`RsaMotorStudioEasyModeConfig`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-easy-mode-config.md) object renesas-preview **EXPERIMENTAL**
