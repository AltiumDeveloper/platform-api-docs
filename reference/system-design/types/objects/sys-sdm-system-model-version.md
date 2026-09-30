---
title: "SysSdmSystemModelVersion"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model-version"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysSdmSystemModelVersion

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Common Data Model

- [System Model Version](https://altiumdeveloper.github.io/cdm/classes/sys_SystemModelVersion/) — A specific version of a system model, capturing the state of the system design at a particular point in time.
  - GRID: `grid:workspace:{workspace-id}:system-design:sdm-version/{id}`

### Returned By

[`sysSdmSystemModelVersionById`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-sdm-system-model-version-by-id.md) query

### Member Of

[`SysSdmCreateSystemModelVersionPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-create-system-model-version-payload.md) object · [`SysSdmSystemModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model.md) object

```graphql
type SysSdmSystemModelVersion {
  deviceModels: [SysSdmDeviceModel!]
  downloadUrl(
    schemaVersion: String
  ): String!
  functionalModel: SysSdmFunctionalModel
  hardwareModels: [SysSdmHardwareModel!]
  id: ID!
  metadata: SysSdmSystemModelVersionMetadata
  name: String
  schemaVersion: String
  softwareModels: [SysSdmSoftwareModel!]
  version: Int!
}
```

### Fields

#### `SysSdmSystemModelVersion.deviceModels` · [`[SysSdmDeviceModel!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-device-model.md) list object system-design

#### `SysSdmSystemModelVersion.downloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

##### `SysSdmSystemModelVersion.downloadUrl.schemaVersion` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmSystemModelVersion.functionalModel` · [`SysSdmFunctionalModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-functional-model.md) object system-design

#### `SysSdmSystemModelVersion.hardwareModels` · [`[SysSdmHardwareModel!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-hardware-model.md) list object system-design

#### `SysSdmSystemModelVersion.id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar common

#### `SysSdmSystemModelVersion.metadata` · [`SysSdmSystemModelVersionMetadata`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model-version-metadata.md) object system-design

#### `SysSdmSystemModelVersion.name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmSystemModelVersion.schemaVersion` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar common

#### `SysSdmSystemModelVersion.softwareModels` · [`[SysSdmSoftwareModel!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-model.md) list object system-design

#### `SysSdmSystemModelVersion.version` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar common
