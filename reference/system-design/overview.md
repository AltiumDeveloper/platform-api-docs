---
title: "System Design"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/overview"
bounded_context: "System Design"
kind: "overview"
experimental: false
deprecated: false
---

# System Design

Electronic system design documents, system models and software libraries.

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types.txt)

## Common Data Model

- [System Design](https://altiumdeveloper.github.io/cdm/subsets/system/) — Models the Electronic System Design (ESD) document of a Renesas 365 solution: a system-level block diagram of functional blocks with their key (hardware) and software components, ports and parameters, the connections between blocks, and entries for the hardware and software projects that implement the system. It corresponds to Electronic System Design in a Renesas 365 Workspace.
- [System Design - System Data Model](https://altiumdeveloper.github.io/cdm/subsets/system-sdm/) — Models the System Data Model (SDM) of a Renesas 365 solution and its versions, each combining a functional model with device, hardware and software models, plus metadata recording who created a version and with which application, and client-specific metadata (e.g. for ESD, Altium Designer or e² studio). The ESD document and e² studio push changes to and pull changes from the SDM, and Altium Designer pulls it into hardware projects.

## Entities

API types in this bounded context that represent Common Data Model (CDM) entities. The IRI is the entity's stable identifier in the CDM.

| API type | CDM entity |
| - | - |
| [`SysEsdDocument`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-document.md) | [ESD Document](https://w3id.org/altium/cdm/system/ESDDocument) [`https://w3id.org/altium/cdm/system/ESDDocument`](https://w3id.org/altium/cdm/system/ESDDocument) |
| [`SysSdmConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-connection.md) | [Connection](https://w3id.org/altium/cdm/system/SdmConnection) [`https://w3id.org/altium/cdm/system/SdmConnection`](https://w3id.org/altium/cdm/system/SdmConnection) |
| [`SysSdmDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-device-model.md) | [Device Model](https://w3id.org/altium/cdm/system/SdmDeviceModel) [`https://w3id.org/altium/cdm/system/SdmDeviceModel`](https://w3id.org/altium/cdm/system/SdmDeviceModel) |
| [`SysSdmEndpoint`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-endpoint.md) | [Endpoint](https://w3id.org/altium/cdm/system/SdmEndpoint) [`https://w3id.org/altium/cdm/system/SdmEndpoint`](https://w3id.org/altium/cdm/system/SdmEndpoint) |
| [`SysSdmFunctionalBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-functional-block.md) | [Functional Block](https://w3id.org/altium/cdm/system/SdmFunctionalBlock) [`https://w3id.org/altium/cdm/system/SdmFunctionalBlock`](https://w3id.org/altium/cdm/system/SdmFunctionalBlock) |
| [`SysSdmFunctionalModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-functional-model.md) | [Functional Model](https://w3id.org/altium/cdm/system/SdmFunctionalModel) [`https://w3id.org/altium/cdm/system/SdmFunctionalModel`](https://w3id.org/altium/cdm/system/SdmFunctionalModel) |
| [`SysSdmHardwareComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-hardware-component.md) | [Hardware Component](https://w3id.org/altium/cdm/system/SdmHardwareComponent) [`https://w3id.org/altium/cdm/system/SdmHardwareComponent`](https://w3id.org/altium/cdm/system/SdmHardwareComponent) |
| [`SysSdmHardwareModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-hardware-model.md) | [Hardware Model](https://w3id.org/altium/cdm/system/SdmHardwareModel) [`https://w3id.org/altium/cdm/system/SdmHardwareModel`](https://w3id.org/altium/cdm/system/SdmHardwareModel) |
| [`SysSdmPort`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-port.md) | [Port](https://w3id.org/altium/cdm/system/SdmPort) [`https://w3id.org/altium/cdm/system/SdmPort`](https://w3id.org/altium/cdm/system/SdmPort) |
| [`SysSdmSoftwareComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-component.md) | [Software Component](https://w3id.org/altium/cdm/system/SdmSoftwareComponent) [`https://w3id.org/altium/cdm/system/SdmSoftwareComponent`](https://w3id.org/altium/cdm/system/SdmSoftwareComponent) |
| [`SysSdmSoftwareModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-model.md) | [Software Model](https://w3id.org/altium/cdm/system/SdmSoftwareModel) [`https://w3id.org/altium/cdm/system/SdmSoftwareModel`](https://w3id.org/altium/cdm/system/SdmSoftwareModel) |
| [`SysSdmSoftwareSpecification`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-specification.md) | [Software Specification](https://w3id.org/altium/cdm/system/SdmSoftwareSpecification) [`https://w3id.org/altium/cdm/system/SdmSoftwareSpecification`](https://w3id.org/altium/cdm/system/SdmSoftwareSpecification) |
| [`SysSdmSoftwareStackInstance`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-stack-instance.md) | [Software Stack Instance](https://w3id.org/altium/cdm/system/SdmSoftwareStackInstance) [`https://w3id.org/altium/cdm/system/SdmSoftwareStackInstance`](https://w3id.org/altium/cdm/system/SdmSoftwareStackInstance) |
| [`SysSdmSystemModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model.md) | [System Model](https://w3id.org/altium/cdm/system/SystemModel) [`https://w3id.org/altium/cdm/system/SystemModel`](https://w3id.org/altium/cdm/system/SystemModel) |
| [`SysSdmSystemModelVersion`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model-version.md) | [System Model Version](https://w3id.org/altium/cdm/system/SystemModelVersion) [`https://w3id.org/altium/cdm/system/SystemModelVersion`](https://w3id.org/altium/cdm/system/SystemModelVersion) |

## Entry points

Look up entities by identifier:

- [`sysEsdDocumentById`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-esd-document-by-id.md)
- [`sysEsdDocumentsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-esd-documents-by-ids.md)
- [`sysLibSoftwareComponentById`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-lib-software-component-by-id.md)
- [`sysSdmSystemModelById`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-sdm-system-model-by-id.md)
- [`sysSdmSystemModelsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-sdm-system-models-by-ids.md)
- [`sysSdmSystemModelVersionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-sdm-system-model-version-by-id.md)

## Contents

| Kind | Items | Experimental |
| - | - | - |
| Queries | 10 | 7 |
| Mutations | 8 | 3 |
| Objects | 51 | 37 |
| Inputs | 8 | 3 |
| Enums | 4 | 4 |
