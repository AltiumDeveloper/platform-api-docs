---
title: "DesSharedWithMe"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-shared-with-me"
bounded_context: "Design"
kind: "objects"
experimental: false
deprecated: false
---

# DesSharedWithMe

Projects and manufacture packages shared with user.

### Returned By

[`desSharedWithMe`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-shared-with-me.md) query

```graphql
type DesSharedWithMe {
  manufacturePackages: [DesManufacturePackage!]!
  projects(
    after: String
    before: String
    first: Int
    last: Int
    where: DesSharedWithMeProjectInfoFilterInput
  ): DesSharedWithMeProjectInfoConnection
}
```

### Fields

#### `DesSharedWithMe.manufacturePackages` · [`[DesManufacturePackage!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-manufacture-package.md) non-null object design

Manufacture packages shared with user.

#### `DesSharedWithMe.projects` · [`DesSharedWithMeProjectInfoConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-shared-with-me-project-info-connection.md) object design

Projects shared with user.

##### `DesSharedWithMe.projects.after` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come after the specified cursor.

##### `DesSharedWithMe.projects.before` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

Returns the elements in the list that come before the specified cursor.

##### `DesSharedWithMe.projects.first` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the first \_n\_ elements from the list.

##### `DesSharedWithMe.projects.last` · [`Int`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) scalar common

Returns the last \_n\_ elements from the list.

##### `DesSharedWithMe.projects.where` · [`DesSharedWithMeProjectInfoFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-shared-with-me-project-info-filter-input.md) input design
