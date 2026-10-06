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

- [`BomIssue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-issue.md) — [BOM Issue](https://altiumdeveloper.github.io/cdm/classes/pro_BomIssue/): A problem found when a BOM is analysed, usually against a particular BOM line: for example an unknown part number, a duplicated designator, or a part that is deprecated, low in stock or not compliant with a standard such as REACH. The level at which each kind of check reports (Fatal Error, Error or Warning, or No Report to ignore it) is configurable, and an individual issue can be waived.

- [`BomItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item.md) — [BOM Item](https://altiumdeveloper.github.io/cdm/classes/pro_BomItem/): One line of a BOM: its designators and quantity, the primary manufacturer part used for it (identified by manufacturer and manufacturer part number), and any alternate parts recorded for that line. A line can be linked to a Workspace component that lists its part among its Part Choices, and BOM checks report issues against individual lines.

- [`BomItemAlternate`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-alternate.md) — [BOM Item Alternate](https://altiumdeveloper.github.io/cdm/classes/pro_BomItemAlternate/): An alternate part recorded for one BOM line: another manufacturer part that could be used instead of the line's primary part. Alternates belong to the individual BOM line rather than applying across BOMs. They can come from an uploaded BOM file, be added by hand, or be filled in automatically from the linked component's Part Choices and from suggested alternates, and an alternate can be promoted to become the line's primary part.

- [`BomItemElement`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element.md) — [BOM Item Element](https://altiumdeveloper.github.io/cdm/classes/pro_BomItemElement/): An element (part) that might be used for a particular BOM item.

- [`BomItemSubstitute`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-substitute.md) — [BOM Item Substitute](https://altiumdeveloper.github.io/cdm/classes/pro_BomItemSubstitute/): Substitute is a replacement of a part by another within an individual BOM.

- [`BomRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release.md) — [BOM Release](https://altiumdeveloper.github.io/cdm/classes/pro_BomRelease/): A static snapshot of a Managed BOM's data, saved under a release name with an incremented revision number and optional notes. The BOM Portal makes a release automatically when a Managed BOM is first created and again once its data has been mapped, and further releases can be made whenever needed. Each release moves through its own lifecycle states (by default Draft, Approved and Obsolete), and a Workspace can be configured to block releasing while the BOM has Error or Fatal Error issues.
  - GRID: `grid:workspace:{workspace-id}:procurement:bom-release/{id}`

- [`BomWip`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md)

  - [Consolidated BOM](https://altiumdeveloper.github.io/cdm/classes/pro_ConsolidatedBOM/): Consolidated BOM represents the aggregated bill of materials across one or more Projects or variants, combining all required Parts into a single, unified view for procurement and manufacturing.
    - GRID: `grid:workspace:{workspace-id}:procurement:bom/{id}`
  - [Managed BOM](https://altiumdeveloper.github.io/cdm/classes/pro_ManagedBOM/): A bill of materials kept in a Workspace and worked on in the BOM Portal, where its lines are enriched with manufacturer and supplier data for review and procurement. It can be created from a design project (one of its variants or releases) or uploaded as a CSV/XLS file from any source. A Managed BOM made from a project keeps a link to that project, so it can be updated when the project changes, either in place or as a new revision; snapshots of its data at a point in time are kept as BOM releases.
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
