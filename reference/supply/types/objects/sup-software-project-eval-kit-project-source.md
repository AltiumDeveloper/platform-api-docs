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

#### `artifactVersion` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

The artifact version.

#### `configXmlUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The URL of the config XML.

#### `family` · [`SupSoftwareProjectEvalKitProjectSourceDeviceFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-eval-kit-project-source-device-family.md) enum

The device family of the project source.

#### `framework` · [`SupSoftwareProjectEvalKitProjectSourceFramework`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-eval-kit-project-source-framework.md) enum

The driver framework of the project source.

#### `sourceUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The URL of the source.

#### `type` · [`SupSoftwareProjectEvalKitProjectSourceType!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/enums/sup-software-project-eval-kit-project-source-type.md) non-null enum

The type of the compatible evaluation kit project source.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The last updated date.
