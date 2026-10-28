---
title: "SupEvalKitSoftwareProjectToolchain"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-software-project-toolchain"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitSoftwareProjectToolchain

### Member Of

[`SupEvalKitSoftwareProjectToolchainConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-software-project-toolchain-connection.md) object · [`SupEvalKitSoftwareProjectToolchainEdge`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit-software-project-toolchain-edge.md) object · [`SupSoftwareProjectEvalKitProjectSource`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project-eval-kit-project-source.md) object

```graphql
type SupEvalKitSoftwareProjectToolchain {
  name: String!
  supportedVersions: [String!]!
  toolchainId: String! @deprecated
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `supportedVersions` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### Deprecated

#### `toolchainId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Fields play a technical role for internal uses.
