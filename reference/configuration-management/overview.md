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

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types.txt)

## Common Data Model

- [Configuration Management](https://altiumdeveloper.github.io/cdm/subsets/configuration/) — Models environment configurations, which restrict the Altium Designer working environment of the Workspace members they target to approved configuration data, together with schematic templates and their revisions stored as Workspace Items. In Altium 365 this corresponds to environment configuration management through the Team Configuration Center.

## Entities

API types in this bounded context that represent Common Data Model (CDM) entities. The IRI is the entity's stable identifier in the CDM.

| API type | CDM entity |
| - | - |
| [`DesProjectTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template.md) | [Project Template](https://w3id.org/altium/cdm/design/ProjectTemplate) [`https://w3id.org/altium/cdm/design/ProjectTemplate`](https://w3id.org/altium/cdm/design/ProjectTemplate) |
| [`DesProjectTemplateRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/types/objects/des-project-template-revision.md) | [Project Template Revision](https://w3id.org/altium/cdm/design/ProjectTemplateRevision) [`https://w3id.org/altium/cdm/design/ProjectTemplateRevision`](https://w3id.org/altium/cdm/design/ProjectTemplateRevision) |

## Entry points

Look up entities by identifier:

- [`desProjectTemplateById`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/operations/queries/des-project-template-by-id.md)
- [`desProjectTemplateRevisionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/operations/queries/des-project-template-revision-by-id.md)

## Contents

| Kind | Items | Experimental |
| - | - | - |
| Queries | 3 | 0 |
| Objects | 5 | 0 |
