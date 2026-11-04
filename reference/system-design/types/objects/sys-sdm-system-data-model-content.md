---
title: "SysSdmSystemDataModelContent"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-data-model-content"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysSdmSystemDataModelContent

### Member Of

[`SysSdmBuildSystemModelFromSolutionPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-build-system-model-from-solution-payload.md) object

```graphql
type SysSdmSystemDataModelContent {
  content: String!
  downloadUrl: String!
}
```

### Fields

#### `content` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `downloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Uploads the content as a JSON file to the Files service and returns a pre-signed download URL, valid for one hour.
