---
title: "Procurement"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/overview"
bounded_context: "Procurement"
kind: "overview"
experimental: false
deprecated: false
---

# Procurement

Managed BOMs, BOM releases and BOM items.

Concepts: see the **Procurement** bounded context in the [Common Data Model](https://altiumdeveloper.github.io/cdm/subsets/procurement/)

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types.txt)

## Entities

API types in this bounded context that represent CDM entities:

- [`BomIssue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-issue.md) — [BOM Issue](https://altiumdeveloper.github.io/cdm/classes/pro_BomIssue/)

- [`BomItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item.md) — [BOM Item](https://altiumdeveloper.github.io/cdm/classes/pro_BomItem/)

- [`BomItemAlternate`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-alternate.md) — [BOM Item Alternate](https://altiumdeveloper.github.io/cdm/classes/pro_BomItemAlternate/): Alternate is a global replacement of a part by another in all BOMs where it's used.

- [`BomItemElement`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element.md) — [BOM Item Element](https://altiumdeveloper.github.io/cdm/classes/pro_BomItemElement/): An element (part) that might be used for a particular BOM item.

- [`BomItemSubstitute`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-substitute.md) — [BOM Item Substitute](https://altiumdeveloper.github.io/cdm/classes/pro_BomItemSubstitute/): Substitute is a replacement of a part by another within an individual BOM.

- [`BomRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release.md) — [BOM Release](https://altiumdeveloper.github.io/cdm/classes/pro_BomRelease/)
  - GRID: `grid:workspace:{workspace-id}:procurement:bom-release/{id}`

- [`BomWip`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md)

  - [Consolidated BOM](https://altiumdeveloper.github.io/cdm/classes/pro_ConsolidatedBOM/): Consolidated BOM represents the aggregated bill of materials across one or more Projects or variants, combining all required Parts into a single, unified view for procurement and manufacturing.
    - GRID: `grid:workspace:{workspace-id}:procurement:bom/{id}`
  - [Managed BOM](https://altiumdeveloper.github.io/cdm/classes/pro_ManagedBOM/): Managed BOM represents a version-controlled, workspace-stored bill of materials derived from a specific Project, preserving all Part selections, metadata, and supply chain links at a fixed point in time.
    - GRID: `grid:workspace:{workspace-id}:procurement:bom/{id}`

## Entry points

Look up entities by identifier:

- [`bomBomById`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/operations/queries/bom-bom-by-id.md)

## Contents

| Kind | Items | Experimental |
| - | - | - |
| Queries | 2 | 0 |
| Mutations | 3 | 0 |
| Objects | 45 | 0 |
| Inputs | 19 | 0 |
| Enums | 4 | 0 |
| Interfaces | 5 | 0 |
| Unions | 2 | 0 |
