---
title: "desProjectTemplateById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/operations/queries/des-project-template-by-id"
bounded_context: "Configuration Management"
kind: "queries"
experimental: false
deprecated: false
---

# desProjectTemplateById

Searches for a project template by its identifier.

```graphql
desProjectTemplateById(
  id: ID!
): DesProjectTemplate
```

### Arguments

#### `desProjectTemplateById.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

The project template node identifier.

### Type

#### [`DesProjectTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template.md) object configuration-management

Information about a project template.
