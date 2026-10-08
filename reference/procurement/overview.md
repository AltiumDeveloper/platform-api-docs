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

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types.txt)

## Common Data Model

- [Procurement](https://altiumdeveloper.github.io/cdm/subsets/procurement/) — Models bills of materials: BOMs kept in a Workspace and worked on in the BOM Portal (managed and consolidated BOMs) with their releases, global BOMs, which are not tied to a Workspace, and BOM lines with their alternate and substitute parts and the issues found when a BOM is analysed. It corresponds to the Altium 365 BOM Portal.

## Entities

API types in this bounded context that represent Common Data Model (CDM) entities. The IRI is the entity's stable identifier in the CDM.

| API type | CDM entity |
| - | - |
| [`BomIssue`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-issue.md) | [BOM Issue](https://w3id.org/altium/cdm/procurement/BomIssue) [`https://w3id.org/altium/cdm/procurement/BomIssue`](https://w3id.org/altium/cdm/procurement/BomIssue) |
| [`BomItem`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item.md) | [BOM Item](https://w3id.org/altium/cdm/procurement/BomItem) [`https://w3id.org/altium/cdm/procurement/BomItem`](https://w3id.org/altium/cdm/procurement/BomItem) |
| [`BomItemAlternate`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-alternate.md) | [BOM Item Alternate](https://w3id.org/altium/cdm/procurement/BomItemAlternate) [`https://w3id.org/altium/cdm/procurement/BomItemAlternate`](https://w3id.org/altium/cdm/procurement/BomItemAlternate) |
| [`BomItemElement`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/interfaces/bom-item-element.md) | [BOM Item Element](https://w3id.org/altium/cdm/procurement/BomItemElement) [`https://w3id.org/altium/cdm/procurement/BomItemElement`](https://w3id.org/altium/cdm/procurement/BomItemElement) |
| [`BomItemSubstitute`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-item-substitute.md) | [BOM Item Substitute](https://w3id.org/altium/cdm/procurement/BomItemSubstitute) [`https://w3id.org/altium/cdm/procurement/BomItemSubstitute`](https://w3id.org/altium/cdm/procurement/BomItemSubstitute) |
| [`BomRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-release.md) | [BOM Release](https://w3id.org/altium/cdm/procurement/BomRelease) [`https://w3id.org/altium/cdm/procurement/BomRelease`](https://w3id.org/altium/cdm/procurement/BomRelease) |
| [`BomWip`](https://altiumdeveloper.github.io/platform-api-docs/reference/procurement/types/objects/bom-wip.md) | [Consolidated BOM](https://w3id.org/altium/cdm/procurement/ConsolidatedBOM) [`https://w3id.org/altium/cdm/procurement/ConsolidatedBOM`](https://w3id.org/altium/cdm/procurement/ConsolidatedBOM) [Managed BOM](https://w3id.org/altium/cdm/procurement/ManagedBOM) [`https://w3id.org/altium/cdm/procurement/ManagedBOM`](https://w3id.org/altium/cdm/procurement/ManagedBOM) |

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
