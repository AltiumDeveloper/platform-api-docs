---
title: "Library Management"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/overview"
bounded_context: "Library Management"
kind: "overview"
experimental: false
deprecated: false
---

# Library Management

Managed components, component templates, parts, symbols, footprints, datasheets, reuse blocks and library search.

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types.txt)

## Common Data Model

- [Library Management](https://altiumdeveloper.github.io/cdm/subsets/library/) — Models the components stored in a Workspace and their revisions, the symbols, footprints, parameters, datasheets and part choices that make them up, and the component templates they can be created from. It also covers manufacturer parts in the Workspace part catalog, part requests, and reusable design content such as reuse blocks, managed sheets, and schematic and PCB snippets. It corresponds to Workspace components and design reuse in Altium Designer and Altium 365.

## Entities

API types in this bounded context that represent Common Data Model (CDM) entities. The IRI is the entity's stable identifier in the CDM.

| API type | CDM entity |
| - | - |
| [`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) | [Component Revision](https://w3id.org/altium/cdm/library/ComponentRevision) [`https://w3id.org/altium/cdm/library/ComponentRevision`](https://w3id.org/altium/cdm/library/ComponentRevision) |
| [`DesComponentParameter`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-parameter.md) | [Component Parameter](https://w3id.org/altium/cdm/library/ComponentParameter) [`https://w3id.org/altium/cdm/library/ComponentParameter`](https://w3id.org/altium/cdm/library/ComponentParameter) |
| [`DesComponentTemplate`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template.md) | [Component Template](https://w3id.org/altium/cdm/library/ComponentTemplate) [`https://w3id.org/altium/cdm/library/ComponentTemplate`](https://w3id.org/altium/cdm/library/ComponentTemplate) |
| [`DesComponentTemplateRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component-template-revision.md) | [Component Template Revision](https://w3id.org/altium/cdm/library/ComponentTemplateRevision) [`https://w3id.org/altium/cdm/library/ComponentTemplateRevision`](https://w3id.org/altium/cdm/library/ComponentTemplateRevision) |
| [`DesDatasheet`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-datasheet.md) | [Datasheet](https://w3id.org/altium/cdm/library/Datasheet) [`https://w3id.org/altium/cdm/library/Datasheet`](https://w3id.org/altium/cdm/library/Datasheet) |
| [`DesFootprint`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-footprint.md) | [Footprint Revision](https://w3id.org/altium/cdm/library/FootprintRevision) [`https://w3id.org/altium/cdm/library/FootprintRevision`](https://w3id.org/altium/cdm/library/FootprintRevision) |
| [`DesPart`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-part.md) | [Part](https://w3id.org/altium/cdm/library/Part) [`https://w3id.org/altium/cdm/library/Part`](https://w3id.org/altium/cdm/library/Part) |
| [`DesReuseBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block.md) | [Reuse Block](https://w3id.org/altium/cdm/library/ReuseBlock) [`https://w3id.org/altium/cdm/library/ReuseBlock`](https://w3id.org/altium/cdm/library/ReuseBlock) |
| [`DesReuseBlockRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-reuse-block-revision.md) | [Reuse Block Revision](https://w3id.org/altium/cdm/library/ReuseBlockRevision) [`https://w3id.org/altium/cdm/library/ReuseBlockRevision`](https://w3id.org/altium/cdm/library/ReuseBlockRevision) |
| [`DesSymbol`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-symbol.md) | [Symbol Revision](https://w3id.org/altium/cdm/library/SymbolRevision) [`https://w3id.org/altium/cdm/library/SymbolRevision`](https://w3id.org/altium/cdm/library/SymbolRevision) |

## Entry points

Look up entities by identifier:

- [`desComponentById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-component-by-id.md)
- [`desComponentsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-components-by-ids.md)
- [`desComponentTemplateById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-component-template-by-id.md)
- [`desComponentTemplateRevisionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-component-template-revision-by-id.md)
- [`desDatasheetById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-datasheet-by-id.md)
- [`desFootprintById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-footprint-by-id.md)
- [`desPartById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-by-id.md)
- [`desPartByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-by-ids.md)
- [`desPartGlobalPartByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-part-global-part-by-ids.md)
- [`desReuseBlockById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-block-by-id.md)
- [`desReuseBlockRevisionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-block-revision-by-id.md)
- [`desReuseBlockRevisionsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-block-revisions-by-ids.md)
- [`desReuseBlocksByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-reuse-blocks-by-ids.md)
- [`desSymbolById`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-symbol-by-id.md)

## Contents

| Kind | Items | Experimental |
| - | - | - |
| Queries | 32 | 0 |
| Mutations | 35 | 0 |
| Objects | 146 | 0 |
| Inputs | 84 | 0 |
| Enums | 2 | 0 |
| Unions | 1 | 0 |
