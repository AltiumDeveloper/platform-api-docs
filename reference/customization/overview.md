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

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types.txt)

## Common Data Model

- [Customization](https://altiumdeveloper.github.io/cdm/subsets/customization/) — Models ways to customize and automate a Workspace: process workflows, and scripts with their versions, their executions and the event raised when an execution completes. In the product, each workflow belongs to a process definition that a Workspace administrator creates and manages in the Workspace browser interface.

## Entities

API types in this bounded context that represent Common Data Model (CDM) entities. The IRI is the entity's stable identifier in the CDM.

| API type | CDM entity |
| - | - |
| [`DesWorkflowDefinition`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/des-workflow-definition.md) | [Workflow](https://w3id.org/altium/cdm/customization/Workflow) [`https://w3id.org/altium/cdm/customization/Workflow`](https://w3id.org/altium/cdm/customization/Workflow) |
| [`GloScrScript`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script.md) | [Script](https://w3id.org/altium/cdm/customization/Script) [`https://w3id.org/altium/cdm/customization/Script`](https://w3id.org/altium/cdm/customization/Script) |
| [`GloScrScriptExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-execution.md) | [Script Execution](https://w3id.org/altium/cdm/customization/ScriptExecution) [`https://w3id.org/altium/cdm/customization/ScriptExecution`](https://w3id.org/altium/cdm/customization/ScriptExecution) |
| [`GloScrScriptVersion`](https://altiumdeveloper.github.io/platform-api-docs/reference/customization/types/objects/glo-scr-script-version.md) | [Script Version](https://w3id.org/altium/cdm/customization/ScriptVersion) [`https://w3id.org/altium/cdm/customization/ScriptVersion`](https://w3id.org/altium/cdm/customization/ScriptVersion) |

## Contents

| Kind | Items | Experimental |
| - | - | - |
| Queries | 8 | 0 |
| Mutations | 16 | 0 |
| Objects | 51 | 0 |
| Inputs | 42 | 0 |
| Enums | 3 | 0 |
| Interfaces | 1 | 0 |
