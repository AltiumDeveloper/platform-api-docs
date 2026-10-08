---
title: "SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-software-project-compatible-eval-kit-project-source-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput

### Member Of

[`SupEvalKitCreateSoftwareProjectCompatibleEvalKitInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-create-software-project-compatible-eval-kit-input.md) input · [`SupEvalKitUpdateSoftwareProjectCompatibleEvalKitInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-update-software-project-compatible-eval-kit-input.md) input

```graphql
input SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput {
  artifactVersion: String
  configXmlUrl: String!
  family: SupSoftwareProjectEvalKitProjectSourceDeviceFamily
  framework: SupSoftwareProjectEvalKitProjectSourceFramework
  sourceFile: SupEvalKitFileInput
  sourceUrl: String
  type: SupSoftwareProjectEvalKitProjectSourceType!
}
```

### Fields

#### `artifactVersion` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The artifact version associated with the evaluation kit source.

#### `configXmlUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The URL of the config XML associated with the evaluation kit source.

#### `family` · [`SupSoftwareProjectEvalKitProjectSourceDeviceFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-eval-kit-project-source-device-family.md) enum

The device family of the project source.

#### `framework` · [`SupSoftwareProjectEvalKitProjectSourceFramework`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-eval-kit-project-source-framework.md) enum

The driver framework of the project source.

#### `sourceFile` · [`SupEvalKitFileInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-file-input.md) input

The upload file of the source associated with the evaluation kit source.

#### `sourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The URL of the source associated with the evaluation kit source.

#### `type` · [`SupSoftwareProjectEvalKitProjectSourceType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-eval-kit-project-source-type.md) non-null enum

The project source type.
