---
title: "SupSoftwareProjectEvalKitProjectSourceInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-eval-kit-project-source-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectEvalKitProjectSourceInput

### Member Of

[`SupSoftwareProjectCreateEvalKitSourceInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-create-eval-kit-source-input.md) input · [`SupSoftwareProjectEvalKitSourceInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-eval-kit-source-input.md) input · [`SupSoftwareProjectUpdateEvalKitSourceInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-update-eval-kit-source-input.md) input

```graphql
input SupSoftwareProjectEvalKitProjectSourceInput {
  configXmlUrl: String!
  sourceFile: SupSoftwareProjectFileInput
  sourceUrl: String
  type: SupSoftwareProjectEvalKitProjectSourceType!
}
```

### Fields

#### `configXmlUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The URL of the config XML associated with the evaluation kit source.

#### `sourceFile` · [`SupSoftwareProjectFileInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-file-input.md) input

The upload file of the source associated with the evaluation kit source.

#### `sourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The URL of the source associated with the evaluation kit source.

#### `type` · [`SupSoftwareProjectEvalKitProjectSourceType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-eval-kit-project-source-type.md) non-null enum

The project source type.
