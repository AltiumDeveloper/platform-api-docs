---
title: "Customization"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/customization/overview"
bounded_context: "Customization"
kind: "overview"
experimental: false
deprecated: false
---

# Customization

Extension points, scripts, script executions and workflows.

Concepts: see the **Customization** bounded context in the [Common Data Model](https://altiumdeveloper.github.io/cdm/subsets/customization/)

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types.txt)

## Entities

API types in this bounded context that represent CDM entities:

- [`DesWorkflowDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-workflow-definition.md) — [Workflow](https://altiumdeveloper.github.io/cdm/classes/cus_Workflow/)
  - GRID: `grid:workspace:{workspace-id}:customization:workflow/{id}`
- [`GloScrScript`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script.md) — [Script](https://altiumdeveloper.github.io/cdm/classes/cus_Script/)
  - GRID: `grid:workspace:{workspace-id}:scripts:script/{id}`
- [`GloScrScriptExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution.md) — [Script Execution](https://altiumdeveloper.github.io/cdm/classes/cus_ScriptExecution/)
  - GRID: `grid:workspace:{workspace-id}:scripts:script-execution/{id}`
- [`GloScrScriptVersion`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-version.md) — [Script Version](https://altiumdeveloper.github.io/cdm/classes/cus_ScriptVersion/)
  - GRID: `grid:workspace:{workspace-id}:scripts:script-version/{id}`

## Contents

| Kind | Items | Experimental |
| - | - | - |
| Queries | 8 | 0 |
| Mutations | 16 | 0 |
| Objects | 51 | 0 |
| Inputs | 42 | 0 |
| Enums | 3 | 0 |
| Interfaces | 1 | 0 |
