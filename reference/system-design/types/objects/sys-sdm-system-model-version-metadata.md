---
title: "SysSdmSystemModelVersionMetadata"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model-version-metadata"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysSdmSystemModelVersionMetadata

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Member Of

[`SysSdmSystemModelVersion`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model-version.md) object

```graphql
type SysSdmSystemModelVersionMetadata {
  authoringApplication: SysSdmAuthoringApplication!
  createdAt: DateTime!
  createdBy: String!
  tags: [String!]!
}
```

### Fields

#### `authoringApplication` · [`SysSdmAuthoringApplication!`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-authoring-application.md) non-null object

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

#### `createdBy` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `tags` · [`[String!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
