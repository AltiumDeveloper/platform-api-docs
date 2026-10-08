---
title: "DesReleaseFilterInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-release-filter-input"
bounded_context: "Design"
kind: "inputs"
experimental: false
deprecated: false
---

# DesReleaseFilterInput

A release is a published version of a design with additional generated files for manufacturing.

### Member Of

[`DesReleaseFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-release-filter-input.md) input

```graphql
input DesReleaseFilterInput {
  and: [DesReleaseFilterInput!]
  createdAt: DateTimeOperationFilterInput
  description: StringOperationFilterInput
  or: [DesReleaseFilterInput!]
  releaseId: StringOperationFilterInput
}
```

### Fields

#### `and` · [`[DesReleaseFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-release-filter-input.md) list input

#### `createdAt` · [`DateTimeOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/date-time-operation-filter-input.md) input

The [`DateTime`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/date-time.md) when this release was created.

#### `description` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The summary of this release content or purpose.

#### `or` · [`[DesReleaseFilterInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/inputs/des-release-filter-input.md) list input

#### `releaseId` · [`StringOperationFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/inputs/string-operation-filter-input.md) input

The reference identifier for this release.
