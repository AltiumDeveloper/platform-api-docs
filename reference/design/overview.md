---
title: "Design"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/design/overview"
bounded_context: "Design"
kind: "overview"
experimental: false
deprecated: false
---

# Design

Hardware projects, design data, rule checks, comparisons and project releases.

Concepts: see the **Design** bounded context in the [Common Data Model](https://altiumdeveloper.github.io/cdm/subsets/design/)

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/design/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/design/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types.txt)

## Entities

API types in this bounded context that represent CDM entities:

- [`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md)

  - [Harness Project](https://altiumdeveloper.github.io/cdm/classes/des_HarnessProject/): Harness Project defines the design of a cable and wiring harness as a standalone yet integrable artifact, capturing connectors, wires, splices, and pin-to-pin mappings required to implement electrical interconnects between boards and system elements.
  - [Multiboard Project](https://altiumdeveloper.github.io/cdm/classes/des_MultiboardProject/): Multiboard Project represents the coordinated design of multiple interconnected PCB projects assembled into a single system, capturing both their logical interconnects and physical arrangements.
  - [Hardware Project](https://altiumdeveloper.github.io/cdm/classes/des_Project/)
    - GRID: `grid:workspace:{workspace-id}:design:project/{id}`

- [`DesProjectParameter`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-parameter.md) — [Project Parameter](https://altiumdeveloper.github.io/cdm/classes/des_ProjectParameter/)

- [`DesRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release.md) — [Hardware Project Release](https://altiumdeveloper.github.io/cdm/classes/des_ProjectRelease/): Project Release captures an immutable snapshot of a PCB design project at a specific point in its lifecycle, packaging all design data, outputs, and metadata required for manufacturing, assembly, and downstream processes.
  - GRID: `grid:workspace:{workspace-id}:design:project-release/{id}`

- [`DesWipVariant`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-wip-variant.md) — [Hardware Project Variant](https://altiumdeveloper.github.io/cdm/classes/des_ProjectVariant/)

- [`RuleCheckExecution_Preview`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution-preview.md) — [Rule Check Execution](https://altiumdeveloper.github.io/cdm/classes/des_RuleCheckExecution/): Execution of a rule check against a project to validate design integrity and compliance with specified constraints.
  - GRID: `grid:workspace:{workspace-id}:design:rule-check-execution/{id}`

## Entry points

Look up entities by identifier:

- [`design.ruleCheck.byId`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check/by-id.md)
- [`design.ruleCheck.byIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check/by-ids.md)
- [`design.ruleCheckExecution.byId`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-id.md)
- [`design.ruleCheckExecution.byIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/design/rule-check-execution/by-ids.md)
- [`desProjectById`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-project-by-id.md)
- [`desProjectsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-projects-by-ids.md)
- [`desReleaseById`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/operations/queries/des-release-by-id.md)

## Contents

| Kind | Items | Experimental |
| - | - | - |
| Queries | 25 | 13 |
| Mutations | 11 | 3 |
| Objects | 147 | 41 |
| Inputs | 59 | 8 |
| Enums | 26 | 0 |
