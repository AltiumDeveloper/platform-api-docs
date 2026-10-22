---
title: "GlobalTrackedEventReportPayload"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/global-tracked-event-report-payload"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GlobalTrackedEventReportPayload

Result of reporting a business analytics event.

### Returned By

[`globalTrackedEventReport`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/global-tracked-event-report.md) mutation

```graphql
type GlobalTrackedEventReportPayload {
  errors: [GlobalTrackedEventReportError!]
}
```

### Fields

#### `errors` · [`[GlobalTrackedEventReportError!]`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/global-tracked-event-report-error.md) list union

Errors that prevented the event from being recorded. Empty when the event is accepted.
