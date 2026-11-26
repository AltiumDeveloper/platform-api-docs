---
title: "SysEsdPushSdmIfChangedPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-push-sdm-if-changed-payload"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysEsdPushSdmIfChangedPayload

Result of pushing the System Data Model built from an ESD document.

### Returned By

[`sysEsdPushSdmIfChanged`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-esd-push-sdm-if-changed.md) mutation

```graphql
type SysEsdPushSdmIfChangedPayload {
  sdmVersionId: String!
}
```

### Fields

#### `sdmVersionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Identifier of the resulting System Data Model version: the new one, or the latest one if nothing changed.
