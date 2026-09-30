---
title: "desUpdateProjectParameters"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/mutations/des-update-project-parameters"
bounded_context: "Design"
kind: "mutations"
experimental: false
deprecated: false
---

# desUpdateProjectParameters

Updates parameters for the specified project (does not affect the revision).

```graphql
desUpdateProjectParameters(
  input: DesUpdateProjectParametersInput!
): DesUpdateProjectParametersPayload!
```

### Arguments

#### `desUpdateProjectParameters.input` · [`DesUpdateProjectParametersInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-update-project-parameters-input.md) non-null input design

### Type

#### [`DesUpdateProjectParametersPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-update-project-parameters-payload.md) object design

Payload associated with updating project parameters.
