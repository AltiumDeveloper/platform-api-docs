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

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/llms.txt) · [schema slice](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/schema.graphql) · [all types](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types.txt)

## Common Data Model

- [deviceModel](https://altiumdeveloper.github.io/cdm/subsets/deviceModel/) — Models an embedded device (e.g. an MCU), which the CDM calls a digital twin: its processors; its address map with memories, registers, bit fields and their enumerated values; its peripherals with their instances, modes and configurations; and its pins and ports with the alternative functions of each port. A configured device model filters the full model to one device configuration, which in the product is edited on a hardware component in an ESD document.
- [software](https://altiumdeveloper.github.io/cdm/subsets/software/) — Models the embedded software of a Renesas 365 solution: software projects with their releases and build artifacts, device configurations (with revisions) and their pin assignments, and AI models. In Renesas 365 the software project is the software part of a solution, edited in the built-in Web IDE or in e² studio; a device configuration there also covers the ports, package information and peripherals of a hardware component.
- [ota](https://altiumdeveloper.github.io/cdm/subsets/ota/) — Models over-the-air (OTA) firmware and software updates: devices with their status and installed packages, fleets that group devices, and packages with their version, size, checksums and target hardware. All classes are experimental.

## Entities

API types in this bounded context that represent Common Data Model (CDM) entities. The IRI is the entity's stable identifier in the CDM.

| API type | CDM entity |
| - | - |
| [`DmAddressBlock`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-block.md) | [AddressBlock](https://w3id.org/altium/cdm/deviceModel/AddressBlock) [`https://w3id.org/altium/cdm/deviceModel/AddressBlock`](https://w3id.org/altium/cdm/deviceModel/AddressBlock) |
| [`DmAddressMapModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-map-model.md) | [AddressMap](https://w3id.org/altium/cdm/deviceModel/AddressMap) [`https://w3id.org/altium/cdm/deviceModel/AddressMap`](https://w3id.org/altium/cdm/deviceModel/AddressMap) |
| [`DmAddressSegment`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-address-segment.md) | [AddressSegment](https://w3id.org/altium/cdm/deviceModel/AddressSegment) [`https://w3id.org/altium/cdm/deviceModel/AddressSegment`](https://w3id.org/altium/cdm/deviceModel/AddressSegment) |
| [`DmAmFieldEnum`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-field-enum.md) | [FieldEnum](https://w3id.org/altium/cdm/deviceModel/FieldEnum) [`https://w3id.org/altium/cdm/deviceModel/FieldEnum`](https://w3id.org/altium/cdm/deviceModel/FieldEnum) |
| [`DmAmMemory`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-memory.md) | [Memory](https://w3id.org/altium/cdm/deviceModel/Memory) [`https://w3id.org/altium/cdm/deviceModel/Memory`](https://w3id.org/altium/cdm/deviceModel/Memory) |
| [`DmAmRegister`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-register.md) | [Register](https://w3id.org/altium/cdm/deviceModel/Register) [`https://w3id.org/altium/cdm/deviceModel/Register`](https://w3id.org/altium/cdm/deviceModel/Register) |
| [`DmAmRegisterField`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-am-register-field.md) | [RegisterField](https://w3id.org/altium/cdm/deviceModel/RegisterField) [`https://w3id.org/altium/cdm/deviceModel/RegisterField`](https://w3id.org/altium/cdm/deviceModel/RegisterField) |
| [`DmConfigDependency`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-config-dependency.md) | [PortConfigurationDependency](https://w3id.org/altium/cdm/deviceModel/PortConfigurationDependency) [`https://w3id.org/altium/cdm/deviceModel/PortConfigurationDependency`](https://w3id.org/altium/cdm/deviceModel/PortConfigurationDependency) |
| [`DmConfigEnumValue`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-config-enum-value.md) | [PortConfigurationEnumValue](https://w3id.org/altium/cdm/deviceModel/PortConfigurationEnumValue) [`https://w3id.org/altium/cdm/deviceModel/PortConfigurationEnumValue`](https://w3id.org/altium/cdm/deviceModel/PortConfigurationEnumValue) |
| [`DmDeviceModelAsConfigured`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-device-model-as-configured.md) | [ConfiguredDeviceModel](https://w3id.org/altium/cdm/deviceModel/ConfiguredDeviceModel) [`https://w3id.org/altium/cdm/deviceModel/ConfiguredDeviceModel`](https://w3id.org/altium/cdm/deviceModel/ConfiguredDeviceModel) |
| [`DmFullStackDeviceModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-full-stack-device-model.md) | [FullStackDeviceModel](https://w3id.org/altium/cdm/deviceModel/FullStackDeviceModel) [`https://w3id.org/altium/cdm/deviceModel/FullStackDeviceModel`](https://w3id.org/altium/cdm/deviceModel/FullStackDeviceModel) |
| [`DmPeripheral`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral.md) | [Peripheral](https://w3id.org/altium/cdm/deviceModel/Peripheral) [`https://w3id.org/altium/cdm/deviceModel/Peripheral`](https://w3id.org/altium/cdm/deviceModel/Peripheral) |
| [`DmPeripheralInstance`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-instance.md) | [PeripheralInstance](https://w3id.org/altium/cdm/deviceModel/PeripheralInstance) [`https://w3id.org/altium/cdm/deviceModel/PeripheralInstance`](https://w3id.org/altium/cdm/deviceModel/PeripheralInstance) |
| [`DmPeripheralMode`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-peripheral-mode.md) | [PeripheralMode](https://w3id.org/altium/cdm/deviceModel/PeripheralMode) [`https://w3id.org/altium/cdm/deviceModel/PeripheralMode`](https://w3id.org/altium/cdm/deviceModel/PeripheralMode) |
| [`DmPin`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-pin.md) | [Pin](https://w3id.org/altium/cdm/deviceModel/Pin) [`https://w3id.org/altium/cdm/deviceModel/Pin`](https://w3id.org/altium/cdm/deviceModel/Pin) |
| [`DmPort`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port.md) | [Port](https://w3id.org/altium/cdm/deviceModel/Port) [`https://w3id.org/altium/cdm/deviceModel/Port`](https://w3id.org/altium/cdm/deviceModel/Port) |
| [`DmPortConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-configuration.md) | [PortConfiguration](https://w3id.org/altium/cdm/deviceModel/PortConfiguration) [`https://w3id.org/altium/cdm/deviceModel/PortConfiguration`](https://w3id.org/altium/cdm/deviceModel/PortConfiguration) |
| [`DmPortConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-connection.md) | [PortConnection](https://w3id.org/altium/cdm/deviceModel/PortConnection) [`https://w3id.org/altium/cdm/deviceModel/PortConnection`](https://w3id.org/altium/cdm/deviceModel/PortConnection) |
| [`DmPortFunction`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-port-function.md) | [PortFunction](https://w3id.org/altium/cdm/deviceModel/PortFunction) [`https://w3id.org/altium/cdm/deviceModel/PortFunction`](https://w3id.org/altium/cdm/deviceModel/PortFunction) |
| [`SftDevCfgDeviceConfiguration`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration.md) | [Device Configuration](https://w3id.org/altium/cdm/software/DeviceConfiguration) [`https://w3id.org/altium/cdm/software/DeviceConfiguration`](https://w3id.org/altium/cdm/software/DeviceConfiguration) |
| [`SftDevCfgDeviceConfigurationRevision`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-dev-cfg-device-configuration-revision.md) | [Device Configuration Revision](https://w3id.org/altium/cdm/software/DeviceConfigurationRevision) [`https://w3id.org/altium/cdm/software/DeviceConfigurationRevision`](https://w3id.org/altium/cdm/software/DeviceConfigurationRevision) |
| [`SftSoftwareProject`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/sft-software-project.md) | [Software Project](https://w3id.org/altium/cdm/software/SoftwareProject) [`https://w3id.org/altium/cdm/software/SoftwareProject`](https://w3id.org/altium/cdm/software/SoftwareProject) |

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
