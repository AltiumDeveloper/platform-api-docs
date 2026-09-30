---
title: "SupRefResource"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-resource"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefResource

Represents a resource related to a reference design.

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) object · [`SupRefResource`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-resource.md) object

```graphql
type SupRefResource {
  description: String!
  downloadText: String!
  downloadUrl: String!
  note: String
  otherResources: [SupRefResource]!
  revisionDate: DateTime!
  title: String!
}
```

### Fields

#### `SupRefResource.description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The resource description.

#### `SupRefResource.downloadText` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The information of the download URL.

#### `SupRefResource.downloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The download URL for the resource.

#### `SupRefResource.note` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

An optional note for the resource.

#### `SupRefResource.otherResources` · [`[SupRefResource]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-resource.md) non-null object supply

Other related resources.

#### `SupRefResource.revisionDate` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar common

The revision date for the resource.

#### `SupRefResource.title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The resource title.
