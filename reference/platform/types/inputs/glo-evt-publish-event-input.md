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

#### `GloEvtPublishEventInput.data` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Data associated with the event.

#### `GloEvtPublishEventInput.eventId` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Unique identifier of the event.

#### `GloEvtPublishEventInput.eventType` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The type of the event.

#### `GloEvtPublishEventInput.source` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

The source of the event (in Uri format).

#### `GloEvtPublishEventInput.subject` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar common

Global resource identifier (GRID) of the entity associated with the event.
