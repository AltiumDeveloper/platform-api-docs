---
title: "SftSoftwareUpdateProjectPropertiesPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-update-project-properties-payload"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: false
deprecated: false
---

# SftSoftwareUpdateProjectPropertiesPayload

### Returned By

[`sftSoftwareUpdateProjectCustomProperties`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/sft-software-update-project-custom-properties.md) mutation

```graphql
type SftSoftwareUpdateProjectPropertiesPayload {
  customProperties: [SftSoftwareProjectCustomProperty!]!
  id: ID!
}
```

### Fields

#### `customProperties` · [`[SftSoftwareProjectCustomProperty!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-project-custom-property.md) non-null object

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
