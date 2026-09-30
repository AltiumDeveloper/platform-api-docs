---
title: "DesSetting"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-setting"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesSetting

Setting information.

### Member Of

[`DesUpdateSettingPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-update-setting-payload.md) object

```graphql
type DesSetting {
  name: String!
  value: String!
}
```

### Fields

#### `DesSetting.name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The name of the setting.

#### `DesSetting.value` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The value of the setting.
