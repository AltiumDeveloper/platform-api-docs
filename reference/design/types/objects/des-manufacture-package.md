---
title: "DesManufacturePackage"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-manufacture-package"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesManufacturePackage

Information about the manufacture package.

### Returned By

[`desManufacturePackages`](https://altiumdeveloper.github.io/platform-api-docs/reference/deprecated/design/operations/queries/des-manufacture-packages.md) query

### Member Of

[`DesRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release.md) object · [`DesSharedWithMe`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-shared-with-me.md) object

```graphql
type DesManufacturePackage {
  downloadUrl: String!
  manufacturePackageId: String!
  name: String!
}
```

### Fields

#### `downloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Manufacture package download URL.

#### `manufacturePackageId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Manufacture package reference identifier.

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Manufacture package name.
