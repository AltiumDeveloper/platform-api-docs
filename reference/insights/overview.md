---
title: "Insights"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/insights/overview"
bounded_context: "Insights"
kind: "overview"
experimental: false
deprecated: false
---

# Insights

Workspace insights about parts and designs.

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types.txt)

## Common Data Model

- [Insights](https://altiumdeveloper.github.io/cdm/subsets/insights/) — Models insights that can be followed up by tasks. The only concrete kind is the part insight: it concerns one Workspace part, may be informed by BOMs or design projects, and occurs in BOM releases, project releases or component revisions.

## Entities

API types in this bounded context that represent Common Data Model (CDM) entities. The IRI is the entity's stable identifier in the CDM.

| API type | CDM entity |
| - | - |
| [`DesWorkspaceInsInsight`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/types/objects/des-workspace-ins-insight.md) | [Part Insight](https://w3id.org/altium/cdm/insights/PartInsight) [`https://w3id.org/altium/cdm/insights/PartInsight`](https://w3id.org/altium/cdm/insights/PartInsight) |

## Entry points

Look up entities by identifier:

- [`desWorkspaceInsInsightById`](https://altiumdeveloper.github.io/platform-api-docs/reference/insights/operations/queries/des-workspace-ins-insight-by-id.md)

## Contents

| Kind | Items | Experimental |
| - | - | - |
| Queries | 9 | 0 |
| Mutations | 6 | 0 |
| Objects | 35 | 0 |
| Inputs | 13 | 0 |
| Unions | 1 | 0 |
