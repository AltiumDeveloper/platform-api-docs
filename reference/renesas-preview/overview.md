---
title: "Renesas (preview)"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/overview"
bounded_context: "Renesas (preview)"
kind: "overview"
experimental: false
deprecated: false
---

# Renesas (preview)

Renesas-specific device models, software projects and tools. Parked; not yet organised into bounded contexts.

Concepts: see the **Renesas (preview)** bounded context in the Common Data Model: [deviceModel](https://altiumdeveloper.github.io/cdm/subsets/deviceModel/), [software](https://altiumdeveloper.github.io/cdm/subsets/software/), [ota](https://altiumdeveloper.github.io/cdm/subsets/ota/)

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types.txt)

## Entities

API types in this bounded context that represent CDM entities:

- [`DmAddressBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-block.md) — [AddressBlock](https://altiumdeveloper.github.io/cdm/classes/dm_AddressBlock/): Address block with start, size, and optional registers and peripherals.
- [`DmAddressMapModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-map-model.md) — [AddressMap](https://altiumdeveloper.github.io/cdm/classes/dm_AddressMap/): Address map for the device including memory and peripheral regions.
- [`DmAddressSegment`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-segment.md) — [AddressSegment](https://altiumdeveloper.github.io/cdm/classes/dm_AddressSegment/): A contiguous region of the device's memory map. Each segment can represent either a memory or a peripheral region.
- [`DmAmFieldEnum`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-field-enum.md) — [FieldEnum](https://altiumdeveloper.github.io/cdm/classes/dm_FieldEnum/): An enumerated value for a register field.
- [`DmAmMemory`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-memory.md) — [Memory](https://altiumdeveloper.github.io/cdm/classes/dm_Memory/): A memory entry within an address block.
- [`DmAmRegister`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-register.md) — [Register](https://altiumdeveloper.github.io/cdm/classes/dm_Register/): A hardware register within an address block.
- [`DmAmRegisterField`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-register-field.md) — [RegisterField](https://altiumdeveloper.github.io/cdm/classes/dm_RegisterField/): A bit field within a register.
- [`DmConfigDependency`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-config-dependency.md) — [PortConfigurationDependency](https://altiumdeveloper.github.io/cdm/classes/dm_PortConfigurationDependency/): A dependency describing how a configuration value maps to GPIO or alternate function usage.
- [`DmConfigEnumValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-config-enum-value.md) — [PortConfigurationEnumValue](https://altiumdeveloper.github.io/cdm/classes/dm_PortConfigurationEnumValue/): An enumerated value for a port configuration.
- [`DmDeviceModelAsConfigured`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-model-as-configured.md) — [ConfiguredDeviceModel](https://altiumdeveloper.github.io/cdm/classes/dm_ConfiguredDeviceModel/): A digital twin of an embedded hardware device as configured for a specific use-case. It exposes the device model filtered to specific device configuration.
- [`DmFullStackDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-full-stack-device-model.md) — [FullStackDeviceModel](https://altiumdeveloper.github.io/cdm/classes/dm_FullStackDeviceModel/): A digital twin of an embedded hardware device. It exposes the full device model, including interfaces, peripherals, and ports.
  - GRID: `grid:global::device-model:fullstack-dm/{id}`
- [`DmPeripheral`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral.md) — [Peripheral](https://altiumdeveloper.github.io/cdm/classes/dm_Peripheral/): A single peripheral definition, including its instances and properties.
- [`DmPeripheralInstance`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-instance.md) — [PeripheralInstance](https://altiumdeveloper.github.io/cdm/classes/dm_PeripheralInstance/): A concrete instance of a peripheral (e.g., SCI0), including available modes.
- [`DmPeripheralMode`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-mode.md) — [PeripheralMode](https://altiumdeveloper.github.io/cdm/classes/dm_PeripheralMode/): A specific mode that a peripheral instance can fulfill,
- [`DmPin`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-pin.md) — [Pin](https://altiumdeveloper.github.io/cdm/classes/dm_Pin/): A physical pin on the device.
- [`DmPort`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port.md) — [Port](https://altiumdeveloper.github.io/cdm/classes/dm_Port/): A physical port on the device, with its functions, configurations, and connections.
- [`DmPortConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-configuration.md) — [PortConfiguration](https://altiumdeveloper.github.io/cdm/classes/dm_PortConfiguration/): A specific configuration for a port.
- [`DmPortConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-connection.md) — [PortConnection](https://altiumdeveloper.github.io/cdm/classes/dm_PortConnection/): A connection from this port to another component or signal.
- [`DmPortFunction`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-function.md) — [PortFunction](https://altiumdeveloper.github.io/cdm/classes/dm_PortFunction/): A specific function that a port can perform.
- [`SftDevCfgDeviceConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration.md) — [Device Configuration](https://altiumdeveloper.github.io/cdm/classes/sft_DeviceConfiguration/): The configuration of a device (e.g. an MCU placed as a hardware component in an ESD document), covering its ports, package information, peripherals and pin assignments. It is viewed and edited on the hardware component in the ESD document, and the pin functions it defines can be pulled from the solution's SDM onto the pins of the associated component in a hardware project in Altium Designer.
  - GRID: `grid:workspace:{workspace-id}:software:device-configuration/{id}`
- [`SftDevCfgDeviceConfigurationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration-revision.md) — [Device Configuration Revision](https://altiumdeveloper.github.io/cdm/classes/sft_DeviceConfigurationRevision/)
  - GRID: `grid:workspace:{workspace-id}:software:device-configuration-revision/{id}`
- [`SftSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-project.md) — [Software Project](https://altiumdeveloper.github.io/cdm/classes/sft_SoftwareProject/): The software part of a Renesas 365 solution, developed in the built-in Web IDE (based on the Theia framework) or in e² studio; it can also be created with an external repository type. In the solution's ESD document it can be linked to a software blanket, and generating a board support package (BSP) from that blanket pushes the SDM and applies the changes to the linked project, creating the project first if none exists yet.
  - GRID: `grid:workspace:{workspace-id}:software:software-project/{id}`

## Entry points

Look up entities by identifier:

- [`rsaMotorStudioEasyModeConfigById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-easy-mode-config-by-id.md)
- [`rsaMotorStudioProjectById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-project-by-id.md)
- [`rsaMotorStudioProjectsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-projects-by-ids.md)
- [`rsaMotorStudioScopeCaptureById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-scope-capture-by-id.md)
- [`rsaMotorStudioScopeConfigById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-scope-config-by-id.md)
- [`rsaMotorStudioTuningById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-tuning-by-id.md)
- [`rsaMotorStudioTuningRevisionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-tuning-revision-by-id.md)
- [`rsaMotorStudioVariableSetById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/rsa-motor-studio-variable-set-by-id.md)
- [`sftAIModelById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-aimodel-by-id.md)
- [`sftAIModelsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-aimodels-by-ids.md)
- [`sftDevCfgDeviceConfigurationById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-dev-cfg-device-configuration-by-id.md)
- [`sftDevCfgDeviceConfigurationRevisionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-dev-cfg-device-configuration-revision-by-id.md)
- [`sftDevCfgDeviceConfigurationRevisionsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-dev-cfg-device-configuration-revisions-by-ids.md)
- [`sftDevCfgDeviceConfigurationsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-dev-cfg-device-configurations-by-ids.md)
- [`sftSimSimulationById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-sim-simulation-by-id.md)
- [`sftSimSimulationsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-sim-simulations-by-ids.md)
- [`sftSoftwareProjectById`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-software-project-by-id.md)
- [`sftSoftwareProjectsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/operations/queries/sft-software-projects-by-ids.md)

## Contents

| Kind | Items | Experimental |
| - | - | - |
| Queries | 41 | 26 |
| Mutations | 56 | 30 |
| Objects | 149 | 115 |
| Inputs | 75 | 46 |
| Enums | 9 | 6 |
