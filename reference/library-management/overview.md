---
title: "Library Management"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/overview"
bounded_context: "Library Management"
kind: "overview"
experimental: false
deprecated: false
---

# Library Management

Managed components, component templates, parts, symbols, footprints, datasheets, reuse blocks and library search.

Concepts: see the **Library Management** bounded context in the [Common Data Model](https://altiumdeveloper.github.io/cdm/subsets/library/)

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types.txt)

## Entities

API types in this bounded context that represent CDM entities:

- [`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) — [Component Revision](https://altiumdeveloper.github.io/cdm/classes/lib_ComponentRevision/): Revision of a Component.
  - GRID: `grid:workspace:{workspace-id}:library:component-revision/{id}`
- [`DesComponentParameter`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-parameter.md) — [Component Parameter](https://altiumdeveloper.github.io/cdm/classes/lib_ComponentParameter/)
- [`DesComponentTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template.md) — [Component Template](https://altiumdeveloper.github.io/cdm/classes/lib_ComponentTemplate/): Component Template defines a reusable blueprint for creating and managing electronic components with consistent parameters, metadata, and lifecycle policies.
  - GRID: `grid:workspace:{workspace-id}:library:component-template/{id}`
- [`DesComponentTemplateRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template-revision.md) — [Component Template Revision](https://altiumdeveloper.github.io/cdm/classes/lib_ComponentTemplateRevision/)
  - GRID: `grid:workspace:{workspace-id}:library:component-template-revision/{id}`
- [`DesDatasheet`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet.md) — [Datasheet](https://altiumdeveloper.github.io/cdm/classes/lib_Datasheet/): Datasheet represents a technical document associated with a Component or Part, providing authoritative specifications, electrical characteristics, and manufacturer information.
  - GRID: `grid:workspace:{workspace-id}:library:datasheet/{id}`
- [`DesFootprint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint.md) — [Footprint Revision](https://altiumdeveloper.github.io/cdm/classes/lib_FootprintRevision/)
  - GRID: `grid:workspace:{workspace-id}:library:footprint-revision/{id}`
- [`DesPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part.md) — [Part](https://altiumdeveloper.github.io/cdm/classes/lib_Part/)
  - GRID: `grid:workspace:{workspace-id}:library:part/{id}`
- [`DesReuseBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block.md) — [Reuse Block](https://altiumdeveloper.github.io/cdm/classes/lib_ReuseBlock/)
  - GRID: `grid:workspace:{workspace-id}:library:reuse-block/{id}`
- [`DesReuseBlockRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-revision.md) — [Reuse Block Revision](https://altiumdeveloper.github.io/cdm/classes/lib_ReuseBlockRevision/)
  - GRID: `grid:workspace:{workspace-id}:library:reuse-block-revision/{id}`
- [`DesSymbol`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol.md) — [Symbol Revision](https://altiumdeveloper.github.io/cdm/classes/lib_SymbolRevision/)
  - GRID: `grid:workspace:{workspace-id}:library:symbol-revision/{id}`

## Entry points

Look up entities by identifier:

- [`desComponentById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-component-by-id.md)
- [`desComponentsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-components-by-ids.md)
- [`desComponentTemplateById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-component-template-by-id.md)
- [`desComponentTemplateRevisionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-component-template-revision-by-id.md)
- [`desDatasheetById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-datasheet-by-id.md)
- [`desFootprintById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-footprint-by-id.md)
- [`desPartById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-by-id.md)
- [`desPartByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-by-ids.md)
- [`desPartGlobalPartByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-global-part-by-ids.md)
- [`desReuseBlockById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-block-by-id.md)
- [`desReuseBlockRevisionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-block-revision-by-id.md)
- [`desReuseBlockRevisionsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-block-revisions-by-ids.md)
- [`desReuseBlocksByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-blocks-by-ids.md)
- [`desSymbolById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-symbol-by-id.md)

## Contents

| Kind | Items | Experimental |
| - | - | - |
| Queries | 32 | 0 |
| Mutations | 35 | 0 |
| Objects | 146 | 0 |
| Inputs | 84 | 0 |
| Enums | 2 | 0 |
| Unions | 1 | 0 |
