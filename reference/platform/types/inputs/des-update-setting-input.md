---
title: "DesUpdateSettingInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/des-update-setting-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# DesUpdateSettingInput

Input for updating a setting.

### Member Of

[`desUpdateSetting`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-update-setting.md) mutation

```graphql
input DesUpdateSettingInput {
  name: String!
  value: String!
  workspaceUrl: String
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of the setting to be updated.

#### `value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The value that the setting should be replaced with.

#### `workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The workspace URL that the setting should be updated on.
