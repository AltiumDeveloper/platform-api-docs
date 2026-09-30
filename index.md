---
title: "Altium Platform API"
url: "https://altiumdeveloper.github.io/platform-api-docs/"
bounded_context: "none"
kind: "overview"
experimental: false
deprecated: false
---

# Altium Platform API

The **Altium Platform API** is a GraphQL API, served from regional endpoints, that brings together the services behind Altium 365: design projects, libraries, collaboration, procurement, supply data and more. This site is the reference for every query, mutation and type it exposes, generated nightly from the production schema.

## Endpoint and access

The API is served per region: use the endpoint of the region that hosts your workspace.

| Region | Endpoint |
| - | - |
| Europe | `https://eur.365.altium.com/api/graphql` |
| US West | `https://usw.365.altium.com/api/graphql` |
| US East | `https://use.365.altium.com/api/graphql` |
| Asia Pacific | `https://asp.365.altium.com/api/graphql` |
| GovCloud | `https://use.365-gov.altium.com/api/graphql` |

Each workspace also has its own endpoint, `https://{workspace-domain}/api/graphql`. Requests carry an access token in an `Authorization: Bearer {access-token}` header; see the [Altium Developer Center](https://developer.altium.com/) and its [documentation](https://www.altium.com/documentation/altium-developer-center) for registering an application and obtaining tokens, and [Getting started](https://altiumdeveloper.github.io/platform-api-docs/guides/getting-started.md) for a first query.

**For AI assistants:** start at [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/llms.txt) — an index of the bounded contexts, each with its own `llms.txt` and a compact `schema.graphql` slice. Every page is also available as Markdown (`.md`).

## How this reference is organised

The API is grouped by **bounded context** — a business area with its own entities and vocabulary — aligned with the [Common Data Model (CDM)](https://altiumdeveloper.github.io/cdm/). Each context lists its queries, mutations and types. Where an API type represents a CDM entity, its page links to the entity definition.

| Bounded context | Covers |
| - | - |
| [Platform](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/overview.md) | Workspaces, users and organizations, folders, apps and tokens, events, notifications, solutions, knowledge graph, lifecycle definitions, revision naming schemes |
| [Design](https://altiumdeveloper.github.io/platform-api-docs/reference/design/overview.md) | Hardware projects, design data, rule checks, comparisons, releases |
| [Insights](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/overview.md) | Workspace insights |
| [Library Management](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/overview.md) | Components, component templates, parts, symbols, footprints, datasheets, reuse blocks, library search |
| [Collaboration](https://altiumdeveloper.github.io/platform-api-docs/reference/collaboration/overview.md) | Comments, annotations, tasks |
| [Configuration Management](https://altiumdeveloper.github.io/platform-api-docs/reference/configuration-management/overview.md) | Environment configuration; project, settings and sheet templates |
| [Procurement](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/overview.md) | Managed BOMs and BOM releases |
| [Supply](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/overview.md) | Parts, offers, part families, reference designs, evaluation kits, solution templates |
| [Customization](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/overview.md) | Extension points, scripts, workflows |
| [System Design](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/overview.md) | System design documents and system models |
| [Requirements](https://altiumdeveloper.github.io/platform-api-docs/reference/requirements/overview.md) | Requirements projects and data |
| [Renesas (preview)](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/overview.md) | Renesas-specific device models, software projects and tools |
| [Common](https://altiumdeveloper.github.io/platform-api-docs/reference/common/overview.md) | Shared scalars, paging, filtering and directives |

## Naming conventions

Names tell you where an operation belongs:

- **Bounded-context queries** are nested by context and entity: `requirements.project.byId(id: ID!)`, `platform.token.byWorkspace(first: Int)`.
- **Legacy queries** use a short prefix: `desProjectById`, `supRefDesigns`, `bomBoms` (`des` = design, `sup` = supply, `glo` = global/platform, `bom` = procurement).
- **Mutations** are top-level and named `{boundedContext}{Entity}{Action}`, for example `designRuleCheckExecute`. Most take a single `input: <Name>Input!` argument and return a `<Name>Payload!`.
- Paged lists are Relay connections (`first`/`after`, `pageInfo`); see [Pagination](https://altiumdeveloper.github.io/platform-api-docs/guides/pagination.md).
- Types and operations whose names end in `_Preview` belong to preview schemas.

More in the guides: [Naming conventions](https://altiumdeveloper.github.io/platform-api-docs/guides/naming-conventions.md), [Identifiers and lookups](https://altiumdeveloper.github.io/platform-api-docs/guides/identifiers.md), [Pagination](https://altiumdeveloper.github.io/platform-api-docs/guides/pagination.md), [Errors](https://altiumdeveloper.github.io/platform-api-docs/guides/errors.md) and [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

## Lifecycle

| Stage | What it means for you |
| - | - |
| **Experimental** | Marked with an `EXPERIMENTAL` badge. Not production-ready: it may change or be removed without notice. Do not build production integrations on it. |
| **Stable** | Evolves only in backward-compatible ways. |
| **Deprecated** | Still works, but marked `@deprecated` with a reason and a replacement. Migrate before it is removed. |
| **Removed** | No longer part of the schema. |

## Machine-readable schema

Download the full schema in SDL form: [schema.graphql](https://altiumdeveloper.github.io/platform-api-docs/schema.graphql). It is regenerated together with this site and is the best input for code generators. Each bounded context also publishes a smaller slice at `/reference/<context>/schema.graphql`, listed in [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/llms.txt).
