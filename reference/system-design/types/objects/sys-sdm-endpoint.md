---
title: "SysSdmEndpoint"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-endpoint"
bounded_context: "System Design"
kind: "objects"
experimental: true
deprecated: false
---

# SysSdmEndpoint

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

### Common Data Model

- [Endpoint](https://altiumdeveloper.github.io/cdm/classes/sys_SdmEndpoint/) — Represents an endpoint of a connection.

### Member Of

[`SysSdmConnection`](https://altiumdeveloper.github.io/platform-api-docs/reference/system-design/types/objects/sys-sdm-connection.md) object

```graphql
type SysSdmEndpoint {
  functionalBlockId: String!
  portId: String!
}
```

### Fields

#### `SysSdmEndpoint.functionalBlockId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

#### `SysSdmEndpoint.portId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common
