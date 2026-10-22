---
title: "GlobalTrackedEventContextObjectIdInvalidError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/global-tracked-event-context-object-id-invalid-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GlobalTrackedEventContextObjectIdInvalidError

Indicates that the supplied context object identifier is rejected.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`GlobalTrackedEventReportError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/global-tracked-event-report-error.md) union

```graphql
type GlobalTrackedEventContextObjectIdInvalidError implements Error {
  contextObjectId: String!
  message: String!
}
```

### Fields

#### `contextObjectId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Context object identifier that was rejected.

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Description of the problem.
