---
title: "desReleaseById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-release-by-id"
bounded_context: "Design"
kind: "queries"
experimental: false
deprecated: false
---

# desReleaseById

Searches a release by its identifier.

```graphql
desReleaseById(
  id: ID!
): DesRelease
```

### Arguments

#### `desReleaseById.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The release identifier.

### Type

#### [`DesRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release.md) object design

A release is a published version of a design with additional generated files for manufacturing.
