---
title: "SysSdmConnection"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-connection"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysSdmConnection

### Common Data Model

- [Connection](https://w3id.org/altium/cdm/system/SdmConnection) — Represents a connection between functional blocks.
  - IRI: [`https://w3id.org/altium/cdm/system/SdmConnection`](https://w3id.org/altium/cdm/system/SdmConnection)

### Member Of

[`SysSdmFunctionalModel`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-functional-model.md) object

```graphql
type SysSdmConnection {
  endpoints: [SysSdmEndpoint!]
  id: ID!
  name: String
  parameters: [SysSdmParameter!]
}
```

### Fields

#### `endpoints` · [`[SysSdmEndpoint!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-endpoint.md) list object

#### `id` · [`ID!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `name` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

#### `parameters` · [`[SysSdmParameter!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-parameter.md) list object
