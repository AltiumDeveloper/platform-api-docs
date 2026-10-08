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

#### `description` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The resource description.

#### `downloadText` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The information of the download URL.

#### `downloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The download URL for the resource.

#### `note` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

An optional note for the resource.

#### `otherResources` · [`[SupRefResource]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-resource.md) non-null object

Other related resources.

#### `revisionDate` · [`DateTime!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The revision date for the resource.

#### `title` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The resource title.
