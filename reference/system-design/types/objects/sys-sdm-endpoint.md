---
title: "SysSdmEndpoint"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-endpoint"
bounded_context: "System Design"
kind: "objects"
experimental: false
deprecated: false
---

# SysSdmEndpoint

### Common Data Model

- [Endpoint](https://w3id.org/altium/cdm/system/SdmEndpoint) — Represents an endpoint of a connection.
  - IRI: [`https://w3id.org/altium/cdm/system/SdmEndpoint`](https://w3id.org/altium/cdm/system/SdmEndpoint)

### Member Of

[`SysSdmConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-connection.md) object

```graphql
type SysSdmEndpoint {
  functionalBlockId: String!
  portId: String!
}
```

### Fields

#### `functionalBlockId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `portId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar
