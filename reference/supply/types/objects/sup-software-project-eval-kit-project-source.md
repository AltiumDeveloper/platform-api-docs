---
title: "SupSoftwareProjectEvalKitProjectSource"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-project-source"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectEvalKitProjectSource

### Member Of

[`SupSoftwareProjectEvalKitSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-source.md) object

```graphql
type SupSoftwareProjectEvalKitProjectSource {
  artifactVersion: String
  configXmlUrl: String!
  family: SupSoftwareProjectEvalKitProjectSourceDeviceFamily
  framework: SupSoftwareProjectEvalKitProjectSourceFramework
  sourceUrl: String!
  type: SupSoftwareProjectEvalKitProjectSourceType!
  updatedAt: DateTime!
}
```

### Fields

#### `SupSoftwareProjectEvalKitProjectSource.artifactVersion` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

The artifact version.

#### `SupSoftwareProjectEvalKitProjectSource.configXmlUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The URL of the config XML.

#### `SupSoftwareProjectEvalKitProjectSource.family` · [`SupSoftwareProjectEvalKitProjectSourceDeviceFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-eval-kit-project-source-device-family.md) enum supply

The device family of the project source.

#### `SupSoftwareProjectEvalKitProjectSource.framework` · [`SupSoftwareProjectEvalKitProjectSourceFramework`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-eval-kit-project-source-framework.md) enum supply

The driver framework of the project source.

#### `SupSoftwareProjectEvalKitProjectSource.sourceUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The URL of the source.

#### `SupSoftwareProjectEvalKitProjectSource.type` · [`SupSoftwareProjectEvalKitProjectSourceType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-eval-kit-project-source-type.md) non-null enum supply

The type of the compatible evaluation kit project source.

#### `SupSoftwareProjectEvalKitProjectSource.updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The last updated date.
