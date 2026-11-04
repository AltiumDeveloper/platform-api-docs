---
title: "sysSdmBuildSystemModelFromSolution"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/mutations/sys-sdm-build-system-model-from-solution"
bounded_context: "System Design"
kind: "mutations"
experimental: false
deprecated: false
---

# sysSdmBuildSystemModelFromSolution

Builds the System Data Model from the solution's first ESD document and returns it as JSON. The result is not stored.

### Type

#### [`SysSdmBuildSystemModelFromSolutionPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-build-system-model-from-solution-payload.md) object

```graphql
sysSdmBuildSystemModelFromSolution(
  input: SysSdmBuildSystemModelFromSolutionInput!
): SysSdmBuildSystemModelFromSolutionPayload!
```

### Arguments

#### `input` · [`SysSdmBuildSystemModelFromSolutionInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/inputs/sys-sdm-build-system-model-from-solution-input.md) non-null input
