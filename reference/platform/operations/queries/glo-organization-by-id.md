---
title: "gloOrganizationById"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/queries/glo-organization-by-id"
bounded_context: "Platform"
kind: "queries"
experimental: false
deprecated: false
---

# gloOrganizationById

Retrieves an organization by its global resource identifier.

### Type

#### [`GloOrganization`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-organization.md) object

```graphql
gloOrganizationById(
  organizationId: ID!
): GloOrganization
```

### Arguments

#### `organizationId` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar
