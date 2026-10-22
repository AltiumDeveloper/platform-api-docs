---
title: "GlobalTrackedEventNameInvalidError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/global-tracked-event-name-invalid-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GlobalTrackedEventNameInvalidError

Indicates that the supplied event name is rejected.

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`GlobalTrackedEventReportError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/global-tracked-event-report-error.md) union

```graphql
type GlobalTrackedEventNameInvalidError implements Error {
  eventName: String!
  message: String!
}
```

### Fields

#### `eventName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Event name that was rejected.

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Description of the problem.
