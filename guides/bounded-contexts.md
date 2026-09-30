---
title: "Bounded contexts and the CDM"
url: "https://altiumdeveloper.github.io/platform-api-docs/guides/bounded-contexts"
bounded_context: "none"
kind: "guide"
experimental: false
deprecated: false
---

# Bounded contexts and the CDM

A **bounded context** is a business area with its own entities and vocabulary — design, library management, procurement and so on. The Platform API, this reference and the [Common Data Model (CDM)](https://altiumdeveloper.github.io/cdm/) are organised by the same bounded contexts, so a concept you find in the CDM leads you straight to the API types and operations for it.

## The bounded contexts

| Bounded context | Covers | Start here |
| - | - | - |
| Platform | Workspaces, users, organizations, apps and tokens, folders, events, notifications, solutions, knowledge graph | [Overview](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/overview.md) |
| Design | Hardware projects, design data, rule checks, comparisons, releases | [Overview](https://altiumdeveloper.github.io/platform-api-docs/reference/design/overview.md) |
| Insights | Workspace insights about parts and designs | [Overview](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/overview.md) |
| Library Management | Components, component templates, parts, symbols, footprints, datasheets, reuse blocks, library search | [Overview](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/overview.md) |
| Collaboration | Comments, comment threads, annotations, tasks | [Overview](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/overview.md) |
| Configuration Management | Environment configuration; project, settings and sheet templates (component templates are library entities) | [Overview](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/overview.md) |
| Procurement | Managed BOMs and BOM releases | [Overview](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/overview.md) |
| Supply | Parts, offers, part families, reference designs, evaluation kits, solution templates | [Overview](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/overview.md) |
| Customization | Extension points, scripts, workflows | [Overview](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/overview.md) |
| System Design | System design documents, system models, software libraries | [Overview](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/overview.md) |
| Requirements | Requirements projects and data | [Overview](https://altiumdeveloper.github.io/platform-api-docs/reference/requirements/overview.md) |
| Renesas (preview) | Renesas-specific device models, software projects and tools | [Overview](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/overview.md) |
| Common | Shared scalars, paging, errors, filtering and sorting types, directives | [Overview](https://altiumdeveloper.github.io/platform-api-docs/reference/common/overview.md) |

Each context's overview page links its concepts in the CDM, lists the API types that represent CDM entities, and names the entry-point queries that look entities up by identifier.

## API types and CDM entities

A CDM entity (for example _Hardware Project_) is represented in the API by one or more GraphQL types (for example [`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md)). The type's reference page has a **Common Data Model** section that links the entity definition and shows its **GRID** pattern — the global resource identifier format, such as `grid:workspace:{workspace-id}:design:project/{id}`. See [Identifiers and lookups](https://altiumdeveloper.github.io/platform-api-docs/guides/identifiers.md) for how GRIDs are used in queries.

## From a concept to a query

1. Find the concept in the [CDM](https://altiumdeveloper.github.io/cdm/) and note its bounded context.
2. Open that context's overview page here and find the API type in **Entities**.
3. Pick an operation from **Entry points** (lookups by identifier) or the context's queries.
4. Check the fields on the type page, then write the query:

```graphql
query ProjectById($id: ID!) {
  desProjectById(id: $id) {
    id
    name
    workspaceUrl
    updatedAt
  }
}
```

Coding assistants can follow the same path through [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/llms.txt): each context has an `llms.txt` with its entities, entry points and operations, and a `schema.graphql` slice with only that context's part of the schema.
