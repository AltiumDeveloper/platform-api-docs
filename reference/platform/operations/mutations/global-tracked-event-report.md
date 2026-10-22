---
title: "globalTrackedEventReport"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/global-tracked-event-report"
bounded_context: "Platform"
kind: "mutations"
experimental: false
deprecated: false
---

# globalTrackedEventReport

Reports a business analytics event for the calling application's workspace.

### Type

#### [`GlobalTrackedEventReportPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/global-tracked-event-report-payload.md) object

Result of reporting a business analytics event.

```graphql
globalTrackedEventReport(
  input: GlobalTrackedEventReportInput!
): GlobalTrackedEventReportPayload!
```

### Arguments

#### `input` · [`GlobalTrackedEventReportInput!`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/global-tracked-event-report-input.md) non-null input
