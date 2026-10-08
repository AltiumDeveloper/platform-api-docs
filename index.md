---
title: "Altium 365 API"
url: "https://altiumdeveloper.github.io/platform-api-docs/"
bounded_context: "none"
kind: "overview"
experimental: false
deprecated: false
---

# Altium 365 API

The **Altium 365 API** is a GraphQL API for reading and writing Altium 365 workspace data: design projects, libraries, collaboration, procurement, supply data and more. This site is the reference for every query, mutation and type it exposes, generated nightly from the production schema.

[Quick start](https://www.altium.com/documentation/altium-developer-center/quick-starts/365-api) [Browse the reference](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/overview.md) [Download schema.graphql](https://altiumdeveloper.github.io/platform-api-docs/schema.graphql)

## Get started

Registering an application, obtaining an access token and calling the API for the first time are covered in the Altium Developer Center:

- [Quick start](https://www.altium.com/documentation/altium-developer-center/quick-starts/365-api)
- [Altium 365 API overview](https://www.altium.com/documentation/altium-developer-center/altium-365/api)
- [Using an access token](https://www.altium.com/documentation/altium-developer-center/altium-365/key-concepts/tokens/access)
- [Examples](https://www.altium.com/documentation/altium-developer-center/altium-365/api/examples)

Regional endpoints, a first query and the Nitro and Voyager tools are in [Getting started](https://altiumdeveloper.github.io/platform-api-docs/guides/getting-started.md).

## How this reference is organised

The API is grouped by **bounded context** — a business area with its own entities and vocabulary — aligned with the [Common Data Model (CDM)](https://altiumdeveloper.github.io/cdm/). Each context lists its queries, mutations and types. Where an API type represents a CDM entity, its page links to the entity definition.

[__**Platform** Workspaces, users and organizations, folders, apps and tokens, events, notifications, solutions, knowledge graph, lifecycle definitions, revision naming schemes](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/overview.md)

[__**Design** Hardware projects, design data, rule checks, comparisons, releases](https://altiumdeveloper.github.io/platform-api-docs/reference/design/overview.md)

[__**Insights** Workspace insights](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/overview.md)

[__**Library Management** Components, component templates, parts, symbols, footprints, datasheets, reuse blocks, library search](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/overview.md)

[__**Collaboration** Comments, annotations, tasks](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/overview.md)

[__**Configuration Management** Environment configuration; project, settings and sheet templates](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/overview.md)

[__**Procurement** Managed BOMs and BOM releases](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/overview.md)

[__**Supply** Parts, offers, part families, reference designs, evaluation kits, solution templates](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/overview.md)

[__**Customization** Extension points, scripts, workflows](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/overview.md)

[__**System Design** System design documents and system models](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/overview.md)

[__**Requirements** Requirements projects and data](https://altiumdeveloper.github.io/platform-api-docs/reference/requirements/overview.md)

[__**Renesas (preview)** Renesas-specific device models, software projects and tools](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/overview.md)

[__**Common** Shared scalars, paging, filtering and directives](https://altiumdeveloper.github.io/platform-api-docs/reference/common/overview.md)

## Guides

[Naming conventions](https://altiumdeveloper.github.io/platform-api-docs/guides/naming-conventions.md), [Identifiers and lookups](https://altiumdeveloper.github.io/platform-api-docs/guides/identifiers.md), [Pagination](https://altiumdeveloper.github.io/platform-api-docs/guides/pagination.md), [Errors](https://altiumdeveloper.github.io/platform-api-docs/guides/errors.md) and [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md) explain how the API is shaped and how to use it.

## For AI assistants and code generators

Start at [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/llms.txt): an index of the bounded contexts, each with its own `llms.txt` and a compact `schema.graphql` slice. Every page is also available as Markdown (`.md`). The full schema in SDL form is [schema.graphql](https://altiumdeveloper.github.io/platform-api-docs/schema.graphql), regenerated together with this site; each bounded context also publishes a smaller slice at `/reference/<context>/schema.graphql`.
