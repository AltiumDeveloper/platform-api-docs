---
title: "DesUnionPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/unions/des-union-payload"
bounded_context: "Library Management"
kind: "unions"
experimental: false
deprecated: false
---

# DesUnionPayload

Union type for various payloads.

### Returned By

[`desComponentsByIds`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/operations/queries/des-components-by-ids.md) query

```graphql
union DesUnionPayload = DesComponent | DesErrorPayload
```

### Possible types

#### [`DesComponent`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-component.md) object

A component contains the parametric details of a PCB part.

#### [`DesErrorPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/library-management/types/objects/des-error-payload.md) object

Payload associated with error.
