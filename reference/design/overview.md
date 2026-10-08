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

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/design/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/design/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types.txt)

## Common Data Model

- [Design](https://altiumdeveloper.github.io/cdm/subsets/design/) — Models design projects stored in a Workspace, including multi-board and harness projects, with their parameters, variants and releases, the manufacturing packages shared from releases, project templates with their revisions, and rule checks run against projects. It corresponds to Workspace projects in Altium 365 and Altium Designer, from project creation through to design release.

## Entities

API types in this bounded context that represent Common Data Model (CDM) entities. The IRI is the entity's stable identifier in the CDM.

| API type | CDM entity |
| - | - |
| [`DesProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project.md) | [Harness Project](https://w3id.org/altium/cdm/design/HarnessProject) [`https://w3id.org/altium/cdm/design/HarnessProject`](https://w3id.org/altium/cdm/design/HarnessProject) [Multiboard Project](https://w3id.org/altium/cdm/design/MultiboardProject) [`https://w3id.org/altium/cdm/design/MultiboardProject`](https://w3id.org/altium/cdm/design/MultiboardProject) [Hardware Project](https://w3id.org/altium/cdm/design/Project) [`https://w3id.org/altium/cdm/design/Project`](https://w3id.org/altium/cdm/design/Project) |
| [`DesProjectParameter`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-project-parameter.md) | [Project Parameter](https://w3id.org/altium/cdm/design/ProjectParameter) [`https://w3id.org/altium/cdm/design/ProjectParameter`](https://w3id.org/altium/cdm/design/ProjectParameter) |
| [`DesRelease`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-release.md) | [Hardware Project Release](https://w3id.org/altium/cdm/design/ProjectRelease) [`https://w3id.org/altium/cdm/design/ProjectRelease`](https://w3id.org/altium/cdm/design/ProjectRelease) |
| [`DesWipVariant`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/des-wip-variant.md) | [Hardware Project Variant](https://w3id.org/altium/cdm/design/ProjectVariant) [`https://w3id.org/altium/cdm/design/ProjectVariant`](https://w3id.org/altium/cdm/design/ProjectVariant) |
| [`RuleCheck`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check.md) | [Rule Check](https://w3id.org/altium/cdm/design/RuleCheck) [`https://w3id.org/altium/cdm/design/RuleCheck`](https://w3id.org/altium/cdm/design/RuleCheck) |
| [`RuleCheckExecution`](https://altiumdeveloper.github.io/platform-api-docs/reference/design/types/objects/rule-check-execution.md) | [Rule Check Execution](https://w3id.org/altium/cdm/design/RuleCheckExecution) [`https://w3id.org/altium/cdm/design/RuleCheckExecution`](https://w3id.org/altium/cdm/design/RuleCheckExecution) |

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
| Queries | 26 | 14 |
| Mutations | 11 | 3 |
| Objects | 147 | 41 |
| Inputs | 59 | 8 |
| Enums | 26 | 0 |
