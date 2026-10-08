---
title: "supSoftwareProjectPatchParameters"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-software-project-patch-parameters"
bounded_context: "Supply"
kind: "mutations"
experimental: false
deprecated: false
---

# supSoftwareProjectPatchParameters

Add or remove parameters on a software project. Replaces values of existing parameters.

### Type

#### [`SupSoftwareProjectPatchParametersPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-patch-parameters-payload.md) object

Payload returned after patching parameters on a software project.

```graphql
supSoftwareProjectPatchParameters(
  input: SupSoftwareProjectPatchParametersInput!
): SupSoftwareProjectPatchParametersPayload!
```

### Arguments

#### `input` · [`SupSoftwareProjectPatchParametersInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-patch-parameters-input.md) non-null input
