---
title: "SftSoftwareCreateProjectPropertiesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/sft-software-create-project-properties-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: false
deprecated: false
---

# SftSoftwareCreateProjectPropertiesInput

### Member Of

[`sftSoftwareCreateProjectCustomProperties`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/sft-software-create-project-custom-properties.md) mutation

```graphql
input SftSoftwareCreateProjectPropertiesInput {
  customProperties: [SftSoftwareProjectCustomPropertyInput!]!
  id: ID!
}
```

### Fields

#### `customProperties` · [`[SftSoftwareProjectCustomPropertyInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/sft-software-project-custom-property-input.md) non-null input

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
