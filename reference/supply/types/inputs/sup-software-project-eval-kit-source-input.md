---
title: "SupSoftwareProjectEvalKitSourceInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-eval-kit-source-input"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectEvalKitSourceInput

### Member Of

[`SupSoftwareProjectCreateSoftwareProjectInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-create-software-project-input.md) input · [`SupSoftwareProjectUpdateSoftwareProjectInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-update-software-project-input.md) input

```graphql
input SupSoftwareProjectEvalKitSourceInput {
  configUrl: String @deprecated
  configXmlUrl: String @deprecated
  evalKitId: ID!
  projectSources: [SupSoftwareProjectEvalKitProjectSourceInput!]!
  readmeUrl: String @deprecated
  sourceFile: SupSoftwareProjectFileInput @deprecated
  sourceUrl: String @deprecated
}
```

### Fields

#### `SupSoftwareProjectEvalKitSourceInput.evalKitId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The evaluation kit identifier.

#### `SupSoftwareProjectEvalKitSourceInput.projectSources` · [`[SupSoftwareProjectEvalKitProjectSourceInput!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-eval-kit-project-source-input.md) non-null input supply

The project sources associated with the evaluation kit source.

#### Deprecated

#### `SupSoftwareProjectEvalKitSourceInput.configUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar common

> **Deprecated:** Use 'projectSources' instead.

The URL of the config associated with the evaluation kit source.

#### `SupSoftwareProjectEvalKitSourceInput.configXmlUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar common

> **Deprecated:** Use 'projectSources.configXmlUrl' instead.

The URL of the config XML associated with the evaluation kit source.

#### `SupSoftwareProjectEvalKitSourceInput.readmeUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar common

> **Deprecated:** Use 'projectSources' instead.

The URL of the readme associated with the evaluation kit source.

#### `SupSoftwareProjectEvalKitSourceInput.sourceFile` · [`SupSoftwareProjectFileInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/inputs/sup-software-project-file-input.md) **DEPRECATED** input supply

> **Deprecated:** Use 'projectSources.sourceFile' instead.

The upload file of the source associated with the evaluation kit source.

#### `SupSoftwareProjectEvalKitSourceInput.sourceUrl` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar common

> **Deprecated:** Use 'projectSources.sourceUrl' instead.

The URL of the source associated with the evaluation kit source.
