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
  - [Hardware Project](https://altiumdeveloper.github.io/cdm/classes/des_Project/): A design project stored in a Workspace, normally under its built-in version control, such as a PCB project. It groups the design documents that together define one implementation of a product, along with its project parameters and variants; it is the source from which releases are made and from which Managed BOMs can be created.
    - GRID: `grid:workspace:{workspace-id}:design:project/{id}`

- [`DesProjectParameter`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-parameter.md) — [Project Parameter](https://altiumdeveloper.github.io/cdm/classes/des_ProjectParameter/): A name/value parameter defined at the level of a design project. It is either a Workspace-side (server-side) parameter, kept with the project in the Workspace and editable only there, or a design-side parameter, kept in the project file (e.g. \*.PrjPcb) and editable in Altium Designer. Both kinds appear in the project options and can be used as special strings in design documents.

- [`DesRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release.md) — [Hardware Project Release](https://altiumdeveloper.github.io/cdm/classes/des_ProjectRelease/): Project Release captures an immutable snapshot of a PCB design project at a specific point in its lifecycle, packaging all design data, outputs, and metadata required for manufacturing, assembly, and downstream processes.
  - GRID: `grid:workspace:{workspace-id}:design:project-release/{id}`

- [`DesWipVariant`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-wip-variant.md) — [Hardware Project Variant](https://altiumdeveloper.github.io/cdm/classes/des_ProjectVariant/): A design variant of a project: a named variation of the same base design that is assembled with a different set of components. Within a variant, each component can be fitted, not fitted, fitted with varied parameters, or replaced by an alternate part, and the variant can define its own variant-level parameters. Assembly variants share one bare board, whereas fabrication variants also change overlay information and so need a different board.

- [`RuleCheck`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check.md) — [Rule Check](https://altiumdeveloper.github.io/cdm/classes/des_RuleCheck/): Rule check definitions that can be executed against a project to validate design integrity and compliance with specified constraints.
  - GRID: `grid:workspace:{workspace-id}:design:rule-check/{id}`

- [`RuleCheckExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution.md) — [Rule Check Execution](https://altiumdeveloper.github.io/cdm/classes/des_RuleCheckExecution/): Execution of a rule check against a project to validate design integrity and compliance with specified constraints.
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
