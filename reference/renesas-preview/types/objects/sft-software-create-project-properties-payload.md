---
title: "SftSoftwareCreateProjectPropertiesPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-create-project-properties-payload"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: false
deprecated: false
---

# SftSoftwareCreateProjectPropertiesPayload

### Returned By

[`sftSoftwareCreateProjectCustomProperties`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/mutations/sft-software-create-project-custom-properties.md) mutation

```graphql
type SftSoftwareCreateProjectPropertiesPayload {
  customProperties: [SftSoftwareProjectCustomProperty!]!
  id: ID!
}
```

### Fields

#### `customProperties` · [`[SftSoftwareProjectCustomProperty!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-project-custom-property.md) non-null object

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
