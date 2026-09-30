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

#### `SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput.artifactVersion` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The artifact version associated with the evaluation kit source.

#### `SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput.configXmlUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The URL of the config XML associated with the evaluation kit source.

#### `SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput.family` · [`SupSoftwareProjectEvalKitProjectSourceDeviceFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-eval-kit-project-source-device-family.md) enum supply

The device family of the project source.

#### `SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput.framework` · [`SupSoftwareProjectEvalKitProjectSourceFramework`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-eval-kit-project-source-framework.md) enum supply

The driver framework of the project source.

#### `SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput.sourceFile` · [`SupEvalKitFileInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-eval-kit-file-input.md) input supply

The upload file of the source associated with the evaluation kit source.

#### `SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput.sourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The URL of the source associated with the evaluation kit source.

#### `SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput.type` · [`SupSoftwareProjectEvalKitProjectSourceType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-eval-kit-project-source-type.md) non-null enum supply

The project source type.
