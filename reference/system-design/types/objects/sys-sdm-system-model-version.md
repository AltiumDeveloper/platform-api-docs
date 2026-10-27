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

- [System Model Version](https://w3id.org/altium/cdm/system/SystemModelVersion) — A specific version of a system model, capturing the state of the system design at a particular point in time.

  - IRI: [`https://w3id.org/altium/cdm/system/SystemModelVersion`](https://w3id.org/altium/cdm/system/SystemModelVersion)
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

#### `deviceModels` · [`[SysSdmDeviceModel!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-device-model.md) list object

#### `downloadUrl` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

##### `schemaVersion` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `functionalModel` · [`SysSdmFunctionalModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-functional-model.md) object

#### `hardwareModels` · [`[SysSdmHardwareModel!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-hardware-model.md) list object

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `metadata` · [`SysSdmSystemModelVersionMetadata`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model-version-metadata.md) object

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `schemaVersion` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `softwareModels` · [`[SysSdmSoftwareModel!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-software-model.md) list object

#### `version` · [`Int!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/int.md) non-null scalar
