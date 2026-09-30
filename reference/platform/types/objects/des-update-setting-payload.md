---
title: "DesUpdateSettingPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-update-setting-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# DesUpdateSettingPayload

Payload associated with updating a setting.

### Returned By

[`desUpdateSetting`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/des-update-setting.md) mutation

```graphql
type DesUpdateSettingPayload {
  errors: [DesPayloadError!]!
  setting: DesSetting!
}
```

### Fields

#### `DesUpdateSettingPayload.errors` · [`[DesPayloadError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/objects/des-payload-error.md) non-null object common

Payload errors.

#### `DesUpdateSettingPayload.setting` · [`DesSetting!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/des-setting.md) non-null object platform

The setting that was updated.
