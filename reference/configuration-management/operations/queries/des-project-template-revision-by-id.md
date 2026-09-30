---
title: "desProjectTemplateRevisionById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/operations/queries/des-project-template-revision-by-id"
bounded_context: "Configuration Management"
kind: "queries"
experimental: false
deprecated: false
---

# desProjectTemplateRevisionById

Searches for a project template revision by its identifier.

```graphql
desProjectTemplateRevisionById(
  id: ID!
): DesProjectTemplateRevision
```

### Arguments

#### `desProjectTemplateRevisionById.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The project template revision identifier.

### Type

#### [`DesProjectTemplateRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template-revision.md) object configuration-management

Project template revision information.
