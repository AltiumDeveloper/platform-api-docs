---
title: "Supply"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/supply/overview"
bounded_context: "Supply"
kind: "overview"
experimental: false
deprecated: false
---

# Supply

Parts, offers, part families, reference designs, evaluation kits, software projects and solution templates.

Concepts: see the **Supply** bounded context in the [Common Data Model](https://altiumdeveloper.github.io/cdm/subsets/supply/)

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types.txt)

## Entities

API types in this bounded context that represent CDM entities:

- [`SupEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit.md) — [Evaluation Kit](https://altiumdeveloper.github.io/cdm/classes/sup_EvalKit/)
  - GRID: `grid:supply::platform:eval-kit/{id}`
- [`SupPartFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family.md) — [Part Family](https://altiumdeveloper.github.io/cdm/classes/sup_PartFamily/)
  - GRID: `grid:supply::platform:part-family/{id}`
- [`SupPartGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-group.md) — [Part Group](https://altiumdeveloper.github.io/cdm/classes/sup_PartGroup/)
  - GRID: `grid:supply::platform:part-group/{id}`
- [`SupSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) — [Software Project](https://altiumdeveloper.github.io/cdm/classes/sup_SoftwareProject/)
  - GRID: `grid:supply::platform:software-project/{id}`
- [`SupSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template.md) — [Solution Template](https://altiumdeveloper.github.io/cdm/classes/sup_SolutionTemplate/)
  - GRID: `grid:supply::platform:solution-template/{id}`

## Entry points

Look up entities by identifier:

- [`supEvalKitById`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kit-by-id.md)
- [`supEvalKitsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-eval-kits-by-ids.md)
- [`supPartGroupById`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-part-group-by-id.md)
- [`supPartGroupsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-part-groups-by-ids.md)
- [`supRefDesignById`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-ref-design-by-id.md)
- [`supRefDesignsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-ref-designs-by-ids.md)
- [`supSoftwareProjectById`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-project-by-id.md)
- [`supSoftwareProjectsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-software-projects-by-ids.md)
- [`supSolutionTemplateApplicationById`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-application-by-id.md)
- [`supSolutionTemplateById`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-template-by-id.md)
- [`supSolutionTemplatesByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/operations/queries/sup-solution-templates-by-ids.md)

## Contents

| Kind | Items | Experimental |
| - | - | - |
| Queries | 39 | 0 |
| Mutations | 44 | 0 |
| Objects | 121 | 0 |
| Inputs | 103 | 0 |
| Enums | 20 | 0 |
| Interfaces | 1 | 0 |
| Unions | 45 | 0 |
