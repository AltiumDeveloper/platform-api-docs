---
title: "desComponentTemplateById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-component-template-by-id"
bounded_context: "Library Management"
kind: "queries"
experimental: false
deprecated: false
---

# desComponentTemplateById

Searches for a specific template for a component by its unique identifier.

### Type

#### [`DesComponentTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template.md) object

Information about a component template.

```graphql
desComponentTemplateById(
  id: ID!
): DesComponentTemplate
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

The node identifier for a component template.
