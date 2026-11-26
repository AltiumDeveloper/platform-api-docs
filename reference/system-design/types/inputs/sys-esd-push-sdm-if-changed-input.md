---
title: "SysEsdPushSdmIfChangedInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/inputs/sys-esd-push-sdm-if-changed-input"
bounded_context: "System Design"
kind: "inputs"
experimental: false
deprecated: false
---

# SysEsdPushSdmIfChangedInput

Input for pushing the System Data Model built from an ESD document.

### Member Of

[`sysEsdPushSdmIfChanged`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-esd-push-sdm-if-changed.md) mutation

```graphql
input SysEsdPushSdmIfChangedInput {
  id: ID!
  sdmId: ID!
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Identifier of the ESD document to build the System Data Model from.

#### `sdmId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

Identifier of the system model to push the System Data Model to.
