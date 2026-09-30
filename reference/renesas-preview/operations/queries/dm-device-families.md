---
title: "dmDeviceFamilies"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/dm-device-families"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: true
deprecated: false
---

# dmDeviceFamilies

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Returns the supported device families (backend-owned), ordered by priority, each with a live total device count.

```graphql
dmDeviceFamilies: [DmDeviceFamily!]!
```

### Type

#### [`DmDeviceFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-family.md) object renesas-preview **EXPERIMENTAL**

A supported device family (e.g. RA, RX) with display metadata and total device count.
