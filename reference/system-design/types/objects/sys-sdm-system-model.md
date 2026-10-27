---
title: "SysSdmSystemModel"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysSdmSystemModel

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Common Data Model

- [System Model](https://w3id.org/altium/cdm/system/SystemModel) — A high-level system model that captures the overall system architecture, crossing boundary between functional and logical domains (e.g., hardware and software).

  - IRI: [`https://w3id.org/altium/cdm/system/SystemModel`](https://w3id.org/altium/cdm/system/SystemModel)
  - GRID: `grid:workspace:{workspace-id}:system-design:sdm/{id}`

### Returned By

[`sysSdmSystemModelById`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-sdm-system-model-by-id.md) query · [`sysSdmSystemModelsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/operations/queries/sys-sdm-system-models-by-ids.md) query

### Member Of

[`SolSolution`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/sol-solution.md) object

```graphql
type SysSdmSystemModel {
  id: ID!
  latestVersion: SysSdmSystemModelVersion!
  name: String!
  versions: [SysSdmSystemModelVersion!]
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `latestVersion` · [`SysSdmSystemModelVersion!`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model-version.md) non-null object **EXPERIMENTAL**

#### `name` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar **EXPERIMENTAL**

#### `versions` · [`[SysSdmSystemModelVersion!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-system-model-version.md) list object **EXPERIMENTAL**
