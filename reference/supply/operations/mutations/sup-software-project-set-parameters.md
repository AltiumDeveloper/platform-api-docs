---
title: "supSoftwareProjectSetParameters"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/mutations/sup-software-project-set-parameters"
bounded_context: "Supply"
kind: "mutations"
experimental: false
deprecated: false
---

# supSoftwareProjectSetParameters

Replace all parameters on a software project. Deletes all existing parameters and values, then inserts the new ones.

```graphql
supSoftwareProjectSetParameters(
  input: SupSoftwareProjectSetParametersInput!
): SupSoftwareProjectSetParametersPayload!
```

### Arguments

#### `supSoftwareProjectSetParameters.input` · [`SupSoftwareProjectSetParametersInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-set-parameters-input.md) non-null input supply

### Type

#### [`SupSoftwareProjectSetParametersPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-set-parameters-payload.md) object supply

Payload returned after setting parameters on a software project.
