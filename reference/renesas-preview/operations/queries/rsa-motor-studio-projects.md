---
title: "rsaMotorStudioProjects"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-projects"
bounded_context: "Renesas (preview)"
kind: "queries"
experimental: true
deprecated: false
---

# rsaMotorStudioProjects

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Retrieves collection of MotorStudioProject

```graphql
rsaMotorStudioProjects(
  order: [RsaMotorStudioProjectSortInput!]
  where: RsaMotorStudioProjectFilterInput
): [RsaMotorStudioProject!]!
```

### Arguments

#### `rsaMotorStudioProjects.order` · [`[RsaMotorStudioProjectSortInput!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-project-sort-input.md) list input renesas-preview

#### `rsaMotorStudioProjects.where` · [`RsaMotorStudioProjectFilterInput`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/inputs/rsa-motor-studio-project-filter-input.md) input renesas-preview

### Type

#### [`RsaMotorStudioProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/rsa-motor-studio-project.md) object renesas-preview **EXPERIMENTAL**
