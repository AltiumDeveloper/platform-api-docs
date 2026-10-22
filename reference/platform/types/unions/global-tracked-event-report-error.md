---
title: "GlobalTrackedEventReportError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/unions/global-tracked-event-report-error"
bounded_context: "Platform"
kind: "unions"
experimental: false
deprecated: false
---

# GlobalTrackedEventReportError

### Member Of

[`GlobalTrackedEventReportPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/global-tracked-event-report-payload.md) object

```graphql
union GlobalTrackedEventReportError = GlobalTrackedEventNameInvalidError | GlobalTrackedEventContextObjectIdInvalidError
```

### Possible types

#### [`GlobalTrackedEventNameInvalidError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/global-tracked-event-name-invalid-error.md) object

Indicates that the supplied event name is rejected.

#### [`GlobalTrackedEventContextObjectIdInvalidError`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/global-tracked-event-context-object-id-invalid-error.md) object

Indicates that the supplied context object identifier is rejected.
