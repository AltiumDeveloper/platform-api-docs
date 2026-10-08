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

### Type

#### [`DesRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release.md) object

A release is a published version of a design with additional generated files for manufacturing.

```graphql
desReleaseById(
  id: ID!
): DesRelease
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The release identifier.
