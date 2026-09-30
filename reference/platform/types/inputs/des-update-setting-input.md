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

#### `DesUpdateSettingInput.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the setting to be updated.

#### `DesUpdateSettingInput.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The value that the setting should be replaced with.

#### `DesUpdateSettingInput.workspaceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The workspace URL that the setting should be updated on.
