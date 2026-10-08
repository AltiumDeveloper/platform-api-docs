---
title: "sftSoftwareProjectsByIds"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-software-projects-by-ids"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: false
deprecated: false
---

# sftSoftwareProjectsByIds

Gets software projects by IDs.

### Type

#### [`SftSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-project.md) object

```graphql
sftSoftwareProjectsByIds(
  ids: [ID!]!
): [SftSoftwareProject!]!
```

### Arguments

#### `ids` · [`[ID!]!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
