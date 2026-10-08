---
title: "desComponentTemplateRevisionById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-component-template-revision-by-id"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desComponentTemplateRevisionById

Searches for a specific component template revision by its unique identifier.

### Type

#### [`DesComponentTemplateRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template-revision.md) object

Component template revision information.

```graphql
desComponentTemplateRevisionById(
  id: ID!
): DesComponentTemplateRevision
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The component template revision identifier.
