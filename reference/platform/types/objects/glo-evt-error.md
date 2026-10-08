---
title: "GloEvtError"
url: "https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-evt-error"
bounded_context: "Platform"
kind: "objects"
experimental: false
deprecated: false
---

# GloEvtError

Represents the information about an error.

### Member Of

[`GloEvtCreateSubscriptionPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-evt-create-subscription-payload.md) object · [`GloEvtDeleteSubscriptionPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-evt-delete-subscription-payload.md) object · [`GloEvtPublishEventPayload`](https://altiumdeveloper.github.io/platform-api-docs/reference/platform/types/objects/glo-evt-publish-event-payload.md) object

```graphql
type GloEvtError {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/platform-api-docs/reference/common/types/scalars/string.md) non-null scalar

Description of the error occurred.
