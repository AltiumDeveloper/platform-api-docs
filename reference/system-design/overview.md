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

Concepts: see the **System Design** bounded context in the Common Data Model: [system](https://altiumdeveloper.github.io/cdm/subsets/system/), [system-sdm](https://altiumdeveloper.github.io/cdm/subsets/system-sdm/)

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types.txt)

## Entities

API types in this bounded context that represent CDM entities:

- [`SysEsdDocument`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-esd-document.md) — [ESD Document](https://altiumdeveloper.github.io/cdm/classes/sys_ESDDocument/): A system-level block diagram document used in a Renesas 365 solution (listed there as a System Design project) to describe the architecture of the system at a functional level. It holds functional blocks with their hardware components, software components and ports, the connections between blocks, and blankets through which parts of the design can be linked to PCB or software projects. Pushing to and pulling from the solution's System Data Model (SDM) for the system design is done from the ESD document. Blankets are not modelled as a separate entity here (see MF-068).
  - GRID: `grid:workspace:{workspace-id}:system-design:esd/{id}`
- [`SysSdmConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-connection.md) — [Connection](https://altiumdeveloper.github.io/cdm/classes/sys_SdmConnection/): Represents a connection between functional blocks.
- [`SysSdmDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-device-model.md) — [Device Model](https://altiumdeveloper.github.io/cdm/classes/sys_SdmDeviceModel/): Represents a device model within the system design.
- [`SysSdmEndpoint`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-endpoint.md) — [Endpoint](https://altiumdeveloper.github.io/cdm/classes/sys_SdmEndpoint/): Represents an endpoint of a connection.
- [`SysSdmFunctionalBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-functional-block.md) — [Functional Block](https://altiumdeveloper.github.io/cdm/classes/sys_SdmFunctionalBlock/): Represents a logical block within a system functional model.
- [`SysSdmFunctionalModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-functional-model.md) — [Functional Model](https://altiumdeveloper.github.io/cdm/classes/sys_SdmFunctionalModel/): Captures the functional aspects of the system design, focusing on the behavior and interactions of functional blocks.
- [`SysSdmHardwareComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-hardware-component.md) — [Hardware Component](https://altiumdeveloper.github.io/cdm/classes/sys_SdmHardwareComponent/): Represents a hardware component / part.
- [`SysSdmHardwareModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-hardware-model.md) — [Hardware Model](https://altiumdeveloper.github.io/cdm/classes/sys_SdmHardwareModel/): Captures the hardware components and their interactions within the system design.
- [`SysSdmPort`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-port.md) — [Port](https://altiumdeveloper.github.io/cdm/classes/sys_SdmPort/): Represents a port within a system design. It is a logical interface of a functional block, distinct from dm\_Port, which is a physical port of a device.
- [`SysSdmSoftwareComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-component.md) — [Software Component](https://altiumdeveloper.github.io/cdm/classes/sys_SdmSoftwareComponent/): Represents a software component instance and its dependencies.
- [`SysSdmSoftwareModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-model.md) — [Software Model](https://altiumdeveloper.github.io/cdm/classes/sys_SdmSoftwareModel/): Captures the software components and their interactions within the system design.
- [`SysSdmSoftwareSpecification`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-specification.md) — [Software Specification](https://altiumdeveloper.github.io/cdm/classes/sys_SdmSoftwareSpecification/): The "blueprint" for a software component. Captures the identity and classification of the software independently of any specific instance.
- [`SysSdmSoftwareStackInstance`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-stack-instance.md) — [Software Stack Instance](https://altiumdeveloper.github.io/cdm/classes/sys_SdmSoftwareStackInstance/): Represents a software stack instance and its dependencies.
- [`SysSdmSystemModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model.md) — [System Model](https://altiumdeveloper.github.io/cdm/classes/sys_SystemModel/): A high-level system model that captures the overall system architecture, crossing boundary between functional and logical domains (e.g., hardware and software).
  - GRID: `grid:workspace:{workspace-id}:system-design:sdm/{id}`
- [`SysSdmSystemModelVersion`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model-version.md) — [System Model Version](https://altiumdeveloper.github.io/cdm/classes/sys_SystemModelVersion/): A specific version of a system model, capturing the state of the system design at a particular point in time.
  - GRID: `grid:workspace:{workspace-id}:system-design:sdm-version/{id}`

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
