---
title: "Configuration Management"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/overview"
bounded_context: "Configuration Management"
kind: "overview"
experimental: false
deprecated: false
---

# Configuration Management

Environment configuration and templates: project templates, settings templates, managed sheet templates and their revisions.

Concepts: see the **Configuration Management** bounded context in the [Common Data Model](https://altiumdeveloper.github.io/cdm/subsets/configuration/)

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types.txt)

## Entities

API types in this bounded context that represent CDM entities:

- [`DesProjectTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template.md) — [Project Template](https://altiumdeveloper.github.io/cdm/classes/des_ProjectTemplate/): A project template includes document configurations and settings that you know you will frequently apply to various projects.
  - GRID: `grid:workspace:{workspace-id}:design:project-template/{id}`
- [`DesProjectTemplateRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template-revision.md) — [Project Template Revision](https://altiumdeveloper.github.io/cdm/classes/des_ProjectTemplateRevision/): An immutable revision of a project template.
  - GRID: `grid:workspace:{workspace-id}:design:project-template-revision/{id}`

## Entry points

Look up entities by identifier:

- [`desProjectTemplateById`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/operations/queries/des-project-template-by-id.md)
- [`desProjectTemplateRevisionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/operations/queries/des-project-template-revision-by-id.md)

## Contents

| Kind | Items | Experimental |
| - | - | - |
| Queries | 3 | 0 |
| Objects | 5 | 0 |
