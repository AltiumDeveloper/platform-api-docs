---
title: "sftDevCfgDeviceConfigurationRevisionsByDeviceConfigurationId"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-dev-cfg-device-configuration-revisions-by-device-configuration-id"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: false
deprecated: false
---

# sftDevCfgDeviceConfigurationRevisionsByDeviceConfigurationId

Gets revisions of given device configuration.

```graphql
sftDevCfgDeviceConfigurationRevisionsByDeviceConfigurationId(
  id: ID!
): [SftDevCfgDeviceConfigurationRevision!]!
```

### Arguments

#### `sftDevCfgDeviceConfigurationRevisionsByDeviceConfigurationId.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

### Type

#### [`SftDevCfgDeviceConfigurationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration-revision.md) object renesas-preview
