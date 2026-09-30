---
title: "BomChangeBomReleaseLifecycleStatePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-change-bom-release-lifecycle-state-payload"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomChangeBomReleaseLifecycleStatePayload

### Returned By

[`bomChangeBomReleaseLifecycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/operations/mutations/bom-change-bom-release-lifecycle-state.md) mutation

```graphql
type BomChangeBomReleaseLifecycleStatePayload {
  bomRelease: BomRelease
  errors: [BomError!]!
}
```

### Fields

#### `BomChangeBomReleaseLifecycleStatePayload.bomRelease` · [`BomRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release.md) object procurement

#### `BomChangeBomReleaseLifecycleStatePayload.errors` · [`[BomError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-error.md) non-null interface procurement
