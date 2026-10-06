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

- [`SupEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit.md) — [Evaluation Kit](https://altiumdeveloper.github.io/cdm/classes/sup_EvalKit/): A vendor evaluation kit in the supply catalog, described by its associated devices, its reference designs (including a main one) and the software projects compatible with it. In Renesas 365 an eval kit can be linked to a solution, and the browser can connect to the kit over J-Link.
  - GRID: `grid:supply::platform:eval-kit/{id}`
- [`SupPartFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family.md) — [Part Family](https://altiumdeveloper.github.io/cdm/classes/sup_PartFamily/): A manufacturer's grouping of parts in the supply data, where the kind of family is vendor-specific (e.g. Series or Family). Part families form a hierarchy: a family has either child families or, at the lowest level, Part Groups. Families sharing the same parent are usually close alternatives to one another.
  - GRID: `grid:supply::platform:part-family/{id}`
- [`SupPartGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-group.md) — [Part Group](https://altiumdeveloper.github.io/cdm/classes/sup_PartGroup/): A leaf of the part family hierarchy in the supply data, holding the parts that belong to it together with group-level information such as its manufacturer, overview, key features and documents. Groups sharing the same parent family are usually close alternatives to one another.
  - GRID: `grid:supply::platform:part-group/{id}`
- [`SupRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) — [Reference Design](https://altiumdeveloper.github.io/cdm/classes/sup_ReferenceDesign/): An example design published in the supply catalog, bringing together its design files (e.g. schematics and layouts), documentation and the parts it uses. In Renesas 365 a reference design can be imported into a solution, which adds it to the Workspace as a PCB project linked to that solution.
  - GRID: `grid:supply::platform:ref-design/{id}`
- [`SupSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) — [Software Project](https://altiumdeveloper.github.io/cdm/classes/sup_SoftwareProject/): A software project published in the supply catalog, together with the evaluation kits it is compatible with. In Renesas 365 it can be imported into a solution with a compatible eval kit; the import places the project in the Workspace and links it to the solution (see sft\_SoftwareProject).
  - GRID: `grid:supply::platform:software-project/{id}`
- [`SupSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template.md) — [Solution Template](https://altiumdeveloper.github.io/cdm/classes/sup_SolutionTemplate/): A publisher's template for a solution, held in the supply catalog. It brings together catalog software projects, evaluation kits and a system design (ESD) source, and users can clone it.
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
