---
title: "BomChangeBomReleaseLifecycleStatePayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-change-bom-release-lifecycle-state-payload"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# BomChangeBomReleaseLifecycleStatePayload

Result of changing the lifecycle state of a BOM release.

### Returned By

[`bomChangeBomReleaseLifecycleState`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/operations/mutations/bom-change-bom-release-lifecycle-state.md) mutation

```graphql
type BomChangeBomReleaseLifecycleStatePayload {
  bomRelease: BomRelease
  errors: [BomError!]!
}
```

### Fields

#### `bomRelease` · [`BomRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release.md) object

The BOM release with its updated lifecycle state, if the mutation succeeded.

#### `errors` · [`[BomError!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-error.md) non-null interface

Errors that occurred while executing the mutation, if any.
