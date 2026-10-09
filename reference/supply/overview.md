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

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types.txt)

## Common Data Model

- [Supply](https://altiumdeveloper.github.io/cdm/subsets/supply/) — Models the supply catalog: manufacturer parts with their aggregated sourcing data and distributor offers, the companies acting as their manufacturers or distributors, and the vendor-specific part family hierarchy, along with catalog content such as reference designs, evaluation kits, solution templates and software projects. Part, offer and company data correspond to the supply chain data that Octopart aggregates and serves through the Octopart API.

## Entities

API types in this bounded context that represent Common Data Model (CDM) entities. The IRI is the entity's stable identifier in the CDM.

| API type | CDM entity |
| - | - |
| [`SupEvalKit`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-eval-kit.md) | [Evaluation Kit](https://w3id.org/altium/cdm/supply/EvalKit) [`https://w3id.org/altium/cdm/supply/EvalKit`](https://w3id.org/altium/cdm/supply/EvalKit) |
| [`SupPartFamily`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-family.md) | [Part Family](https://w3id.org/altium/cdm/supply/PartFamily) [`https://w3id.org/altium/cdm/supply/PartFamily`](https://w3id.org/altium/cdm/supply/PartFamily) |
| [`SupPartGroup`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-part-group.md) | [Part Group](https://w3id.org/altium/cdm/supply/PartGroup) [`https://w3id.org/altium/cdm/supply/PartGroup`](https://w3id.org/altium/cdm/supply/PartGroup) |
| [`SupRefDesign`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-ref-design.md) | [Reference Design](https://w3id.org/altium/cdm/supply/ReferenceDesign) [`https://w3id.org/altium/cdm/supply/ReferenceDesign`](https://w3id.org/altium/cdm/supply/ReferenceDesign) |
| [`SupSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-software-project.md) | [Software Project](https://w3id.org/altium/cdm/supply/SoftwareProject) [`https://w3id.org/altium/cdm/supply/SoftwareProject`](https://w3id.org/altium/cdm/supply/SoftwareProject) |
| [`SupSolutionTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/supply/types/objects/sup-solution-template.md) | [Solution Template](https://w3id.org/altium/cdm/supply/SolutionTemplate) [`https://w3id.org/altium/cdm/supply/SolutionTemplate`](https://w3id.org/altium/cdm/supply/SolutionTemplate) |

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
| Mutations | 46 | 0 |
| Objects | 124 | 0 |
| Inputs | 105 | 0 |
| Enums | 20 | 0 |
| Interfaces | 1 | 0 |
| Unions | 47 | 0 |
