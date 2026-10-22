---
title: "GlobalTrackedEventReportInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/global-tracked-event-report-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GlobalTrackedEventReportInput

Business analytics event to record.

### Member Of

[`globalTrackedEventReport`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/global-tracked-event-report.md) mutation

```graphql
input GlobalTrackedEventReportInput {
  contextObjectId: String
  eventName: String!
  sourceName: String
  userId: String!
  workspaceId: String!
}
```

### Fields

#### `contextObjectId` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Identifier of the object the event relates to, as a GUID string in D format. Omit when the event relates to no particular object.

#### `eventName` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the event, as dot-separated segments of letters, digits, hyphens and periods, for example Component.Footprint.Edit.

#### `sourceName` · [`String`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) scalar

Name of the reporter. It could be service or App. Optional parameter.

#### `userId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Global user ID as GUID.

#### `workspaceId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

A365 Workspace ID as GUID.
