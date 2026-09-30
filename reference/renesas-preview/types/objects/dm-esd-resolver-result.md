---
title: "DmEsdResolverResult"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-esd-resolver-result"
bounded_context: "Renesas (preview)"
kind: "objects"
experimental: true
deprecated: false
---

# DmEsdResolverResult

**EXPERIMENTAL**

### Experimental

> **Caution:** Not production-ready. It may change or be removed without notice. See [Lifecycle](https://altiumdeveloper.github.io/platform-api-docs/guides/lifecycle.md).

Resolver results for a specific functional block within ESD.

### Member Of

[`DmEsdResolverSummary`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-esd-resolver-summary.md) object

```graphql
type DmEsdResolverResult {
  functionalBlockId: String!
  resolverSummary: DmResolverSummary!
  sessionId: String!
}
```

### Fields

#### `DmEsdResolverResult.functionalBlockId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The functional block identifier within the ESD document.

#### `DmEsdResolverResult.resolverSummary` · [`DmResolverSummary!`](https://altiumdeveloper.github.io/platform-api-docs/reference/renesas-preview/types/objects/dm-resolver-summary.md) non-null object renesas-preview

The summary of resolver runs for this functional block.

#### `DmEsdResolverResult.sessionId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The session identifier that can be used to retrieve resolver results for this functional block.
