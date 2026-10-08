---
title: "GloEvtPublishEventInput"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/inputs/glo-evt-publish-event-input"
bounded_context: "Platform"
kind: "inputs"
experimental: false
deprecated: false
---

# GloEvtPublishEventInput

Represents the information about an event to be dispatched to consumers.

### Member Of

[`gloEvtPublishEvent`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/operations/mutations/glo-evt-publish-event.md) mutation

```graphql
input GloEvtPublishEventInput {
  data: String!
  eventId: String!
  eventType: String!
  source: String!
  subject: String!
}
```

### Fields

#### `data` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Data associated with the event.

#### `eventId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Unique identifier of the event.

#### `eventType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The type of the event.

#### `source` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

The source of the event (in Uri format).

#### `subject` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Global resource identifier (GRID) of the entity associated with the event.
