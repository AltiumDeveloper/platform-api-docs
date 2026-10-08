---
title: "SftSoftwareUpdateProjectPropertiesInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/sft-software-update-project-properties-input"
bounded_context: "Renesas (preview)"
kind: "inputs"
experimental: false
deprecated: false
---

# SftSoftwareUpdateProjectPropertiesInput

### Member Of

[`sftSoftwareUpdateProjectCustomProperties`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/sft-software-update-project-custom-properties.md) mutation

```graphql
input SftSoftwareUpdateProjectPropertiesInput {
  customProperties: [SftSoftwareProjectCustomPropertyInput!]!
  id: ID!
}
```

### Fields

#### `customProperties` · [`[SftSoftwareProjectCustomPropertyInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/sft-software-project-custom-property-input.md) non-null input

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
