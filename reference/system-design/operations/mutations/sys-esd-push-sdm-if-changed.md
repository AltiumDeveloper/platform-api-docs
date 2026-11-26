---
title: "sysEsdPushSdmIfChanged"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-esd-push-sdm-if-changed"
bounded_context: "System Design"
kind: "mutations"
experimental: false
deprecated: false
---

# sysEsdPushSdmIfChanged

Builds the System Data Model from the ESD Document using the latest stored version as the baseline and pushes it to the System Data Model service, which creates a new version only if changes are detected. Returns the identifier of the resulting System Data Model version.

### Type

#### [`SysEsdPushSdmIfChangedPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-push-sdm-if-changed-payload.md) object

Result of pushing the System Data Model built from an ESD document.

```graphql
sysEsdPushSdmIfChanged(
  input: SysEsdPushSdmIfChangedInput!
): SysEsdPushSdmIfChangedPayload!
```

### Arguments

#### `input` · [`SysEsdPushSdmIfChangedInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/inputs/sys-esd-push-sdm-if-changed-input.md) non-null input
