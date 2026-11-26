---
title: "sysSdmSyncSystemModelFromSolution"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-sdm-sync-system-model-from-solution"
bounded_context: "System Design"
kind: "mutations"
experimental: false
deprecated: false
---

# sysSdmSyncSystemModelFromSolution

Builds the System Data Model from the solution's first ESD document using the latest stored version as the baseline. If it differs from the latest version (ignoring version number, schema version and metadata), stores it as a new version and returns that version; otherwise returns the latest version.

### Type

#### [`SysSdmSyncSystemModelFromSolutionPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-sync-system-model-from-solution-payload.md) object

```graphql
sysSdmSyncSystemModelFromSolution(
  input: SysSdmSyncSystemModelFromSolutionInput!
): SysSdmSyncSystemModelFromSolutionPayload!
```

### Arguments

#### `input` · [`SysSdmSyncSystemModelFromSolutionInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/inputs/sys-sdm-sync-system-model-from-solution-input.md) non-null input
