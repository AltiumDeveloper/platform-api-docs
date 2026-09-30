---
title: "GloNtfError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/interfaces/glo-ntf-error"
bounded_context: "Platform"
kind: "interfaces"
experimental: false
deprecated: false
---

# GloNtfError

Represents the information about an error.

### Implemented By

[`GloNtfPayloadError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-ntf-payload-error.md) object

```graphql
interface GloNtfError {
  message: String!
}
```

### Fields

#### `GloNtfError.message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Description of the error occurred.
